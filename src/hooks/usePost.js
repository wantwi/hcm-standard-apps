import { useState, useEffect, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import { toastWarning } from "src/reusable/components/ToastStylesComponent/ToastStyles";
import useCustomApi from "./useCustomApi";
import useLoader from "./useLoader";

const usePost = (initialUrl, callback) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoading: setLoading } = useLoader();
  const api = useCustomApi();

  const executePost = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.post(url, data);

      console.log({executePost: response});

      if (!response || response.status >=400) {
        throw "Data was not saved";
      }

      callback(response);

      setError(null);
      setLoading(false);
      setUrl("");
      setData(null);
      setIsError(false);
    } catch (error) {
      let message = error?.message;
      console.log({ error:Object.keys(error.response.data.errors).map(x=> x.replace("$.",''))[0],  errorMes:Object.values(error.response.data.errors)[0]});

      setIsError(true);
      toast.error(message);
      setError(error);
      setLoading(false);
      setUrl("");
      setData(null);
    }
  });

  useEffect(() => {
    if (url && data) {
      executePost();
    }
  }, [url, data]);

  return { setUrl, setData, error, isError, setIsError };
};

export default usePost;
