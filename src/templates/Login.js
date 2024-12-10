import React, { useState } from "react";
import loginJson from "../login.json";

const Login = () => {


  const [data, setData] = useState(loginJson.results); 

  return (
    <div className="d-flex justify-content-end text-white align-items-center gap-2 order-lg-2 flex-right">
      <span className="m-2">
        <i className="fa fa-user-circle fa-2x"></i>
      </span>
      <span className="desktop-only">Ola, {data.user}</span>
      <button className="btn btn-danger btn-circle d-flex align-items-center justify-content-center">
          <i className="fa fa-power-off fa-lg"></i>
        </button>
    </div>
  );
};

export default Login;
