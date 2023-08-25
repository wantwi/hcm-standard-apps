import axios from "axios";
const {REACT_APP_API_ENDPOINT} = process.env

 console.log({REACT_APP_API_ENDPOINT});
//custom axios for all api calls
const CustomAxios = axios.create({
    baseURL: REACT_APP_API_ENDPOINT,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Application-ID": "00000000-0000-0000-0000-000000000000",
        "Company-Reference": sessionStorage.getItem("companyReference") || JSON.parse(sessionStorage.getItem("companyReference"))?.reference || ""
        
    },
    withCredentials: true
});

export default CustomAxios;
//


