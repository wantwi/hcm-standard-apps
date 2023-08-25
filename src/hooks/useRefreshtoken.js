import { renewToken } from "src/config/config";
import useAuth from "./useAuth";


const useRefreshtoken = () => {
    const {setAuth} = useAuth()

    const refresh = async () => {
            const newToken = await renewToken()
            
            if (newToken) {
                const {access_token} = newToken
                setAuth((prev) => ({...prev,  accessToken: access_token }))
                return access_token
            }
    }
    return refresh
}

export default useRefreshtoken 