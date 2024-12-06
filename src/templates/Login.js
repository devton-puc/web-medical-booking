import React from "react";

const Login = () => {
  return (
    <div className="d-flex justify-content-end text-white align-items-center gap-2 order-lg-2 flex-right">
      <span className="m-2">
        <i className="fa fa-user-circle fa-2x"></i>
      </span>
      <span className="desktop-only">Ola, Clara Moreira</span>
      <button className="btn btn-danger btn-circle d-flex align-items-center justify-content-center">
          <i className="fa fa-power-off fa-lg"></i>
        </button>
    </div>
  );
};

export default Login;
