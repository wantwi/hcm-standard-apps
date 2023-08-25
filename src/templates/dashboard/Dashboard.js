import React, { useState, useEffect } from "react";
import useAuth from "src/hooks/useAuth";
import useFetch from "src/hooks/useFetch";
import { Link } from "react-router-dom";
import "./dashboard.css";
import HR from "src/assets/hr.png";
import CA from "src/assets/ca.png";
import PR from "src/assets/pr.png";
import IMAGE from "src/assets/img_.png";
const images = {
  "00000000-0000-0000-0000-100000000000": PR,
  "00000000-0000-0000-0000-200000000000": HR,
  "00000000-0000-0000-0000-300000000000": CA,
};
const Dashboard = () => {
  const [applications, setapplications] = useState([]);
  const [companies, setcompanies] = useState([]);
  const [selectedCompany, setselectedCompany] = useState("");
  const [width, setWidth] = useState("15vw");
  const { auth } = useAuth();
  const [currentcomp, setCurrentCompany] = useState({});
  const [showAds, setShowAds] = useState(true)

  useFetch("Users/Companies", (response) => {
    setcompanies(response);
  });

  const { setUrl: setGetUserAppsUrl } = useFetch("", (response) => {
    if (response.length === 1) {
      setWidth("auto");
    } else if (response.length === 2) {
      setWidth("15vw");
    } else {
      setWidth("25vw");
    }
    setapplications(response);
  });

  const handleOnChange = (e) => {
    setselectedCompany(e.target.value);
    setShowAds(false)
  };

  useEffect(() => {
    if (selectedCompany.length > 0) {
      //sessionStorage.removeItem("companyReference")
      setGetUserAppsUrl(`Applications/${selectedCompany}`);
      const currentCompany = companies.find(
        (x) => x?.reference === selectedCompany
      );
      setCurrentCompany(currentCompany);

      //sessionStorage.setItem("companyReference", JSON.stringify(currentCompany));
    }
    return () => {
      setGetUserAppsUrl("");
    };
  }, [selectedCompany]);

  return (
    <div>
     { auth?.given_name ? <h4>Welcome {auth?.given_name}!</h4>: null}
      <div className="container-wrapper" style={{height:"auto"}}>
       {/* {showAds? <div>
          <h1 style={{width: 200}}>Empowering teams with freedom</h1>
          <h5>Grow your business the Personax way</h5>
        </div>: null} */}

        <div className="company-wrapper">
          <div style={{width:"80%", margin:"0 auto"}}>
          <label className="mb-2 text-mute" style={{color:"#768192", fontWeight:600}}>Company</label>
          <select className="form-control" onChange={handleOnChange}>
            <option>Select Company</option>
            {companies.map((x) => (
              <option key={x?.id} value={x?.reference}>
                {x?.name}
              </option>
            ))}
          </select>
          </div>
         
        </div>
        <div className="app-wrapper">
          {applications.map((x) => (
            <a
              key={x?.id}
              className="box"
              title={x?.name}
              style={{ padding: 10, textAlign: "center" }}
              href={`${x?.appPath}/#/?id=${currentcomp?.id}$${currentcomp?.reference}$${currentcomp?.name}`}
              target="_blank"
            >
              {/* <div key={x?.id}>{x?.name}</div> */}
              <h5>{x?.name}</h5>
              <img
                src={images[x.id]}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </a>
          ))}
        </div>
        {/* {showAds?<h5 style={{margin:0,marginTop:-20}}>A cloud based Human Capital Management solution at your fingertips.</h5>: null} */}
      </div>
      {/* <div className="image-container">
        <img src={IMAGE} />
      </div> */}
    </div>
  );
};

export default Dashboard;
//${x?.appPath} //http://localhost:3000/#/cadmin-standard
