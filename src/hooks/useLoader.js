import { useContext } from "react"
import LoadingContext from "src/context/LoaderProvider"



const useLoader = () => {
    // const { isLoading, setIsLoading } = useContext(LoadingContext);
    return useContext(LoadingContext)
}

export default useLoader