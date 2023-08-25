import { useState, useEffect, useCallback } from "react";
import useCustomApi from "./useCustomApi";
import useLoader from "./useLoader";


const useDelete = (initialUrl, callback) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false);
  const { setIsLoading:setLoading } = useLoader()
  const api = useCustomApi()

  const executePost = useCallback(async () => {
    setLoading(true)
    setIsLoading(true)
    try {
      const response = await api.delete(url, data)

      if (!response) {
        throw "Data was not updated";
      }

      callback(response);

     
      setError(null);
      setLoading(false)
      setUrl("")
      setData(null)
      setIsLoading(false)
      
    } catch (error) {
      setIsError(true)
      setError(error);
      setLoading(false)
      setUrl("")
      setData(null)
      setIsLoading(false)
    }
  });

  useEffect(() => {
    if(url && data){
      executePost();
    }
    
  }, [url, data]);

  return {isLoading, setUrl, setData, isError, setIsError, error };
};

export default useDelete;