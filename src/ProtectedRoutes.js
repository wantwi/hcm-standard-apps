
import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { userLogin } from "./config/config";
 import useAuth from "./hooks/useAuth";
import Loader from "./Loader/Loader";
 


export const ProtectedRoute = ({ children }) => {
     const {auth} = useAuth()
    //  const history = useHistory();
    //  const path = history.location.pathname.replace("/",'')
    

    useEffect(() => {
        if(!auth?.given_name){
            userLogin()
        }
    }, [])

    console.log({ProtectedRoute: auth});
    
    return (
        <div>
            {auth?.given_name? (
                <>{children}</>
            ) : <Loader/>}
        </div>
       
    );
};
