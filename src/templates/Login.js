import React from "react";

const Login = () => {
  return (
    <div className="d-flex align-items-right gap-4 order-lg-2">
      <div className="text-white m-0">
        <span className="m-2">
          <i className="fa fa-user-circle fa-2x"></i>
        </span>
        <span>Ola, Clara Moreira</span>
      </div>
      <button className="btn btn-danger btn-circle d-flex align-items-center justify-content-center">
          <i className="fa fa-power-off fa-lg"></i>
        </button>
    </div>
  );
};

export default Login;
