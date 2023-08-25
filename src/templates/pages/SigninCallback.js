import React, { useEffect } from "react";

import { signinCallback, userLogin } from "src/config/config";
import useAuth from "../../hooks/useAuth";
import {  Redirect } from "react-router-dom";
import "./signiCallback.css";
import jwt from 'jwt-decode'
import useCustomApi from "src/hooks/useCustomApi";

const SigninCallback = () => {
  const { auth, setAuth } = useAuth();
  const axios = useCustomApi()

  const curentUser = async () => {
    try {
      const response = await signinCallback();

      const {  profile } = response;
      const {  given_name } = profile;

      const {acc_ref } = jwt(response?.access_token)
      
      setAuth({ given_name, accessToken: response?.access_token });
      axios.defaults.headers['Company-Reference'] = acc_ref
      sessionStorage.setItem("companyReference", acc_ref);
    
    } catch (error) {
      setAuth(null);
      console.error({ signinCallbackErr: error });
      userLogin();
    }
  };

 

  useEffect(() => {
    curentUser();
    return () => {};
  }, []);



  return (
    <div>
        <h1>Please wait..... {auth?.given_name}</h1>
       {
         auth?.given_name?  <Redirect to="/" /> : null
        } 
             
        
    </div>
  );
};

export default SigninCallback;
