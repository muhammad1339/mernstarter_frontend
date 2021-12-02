import React, { useState } from "react";
import Spinner from "react-spinners/SyncLoader";
import { css } from "@emotion/react";
const axios = require("axios").default;

const override = css`
  display: block;
  margin: 0 auto;
  background: transparent;
`;

const divInputStyle = "m-4 px-4 py-3 flex flex-col mb-4";
const divSubmitStyle = "flex justify-center bg-tansparent";
const inputStyle = "p-2 border border-gray-900 text-grey-darkest";
const submitStyle =
  "m-4 px-4 py-3 m-4 w-60 h-12 bg-green-700 text-white text-bold rounded-full font-mono text-2xl text-center";
const labelStyle = "mb-2 font-bold text-gray-700";
const formContainerStyle = `container p-8 m-4 m-12 md:flex flex-col 
    justify-center max-w-md mx-auto bg-green-100 
    rounded-2xl shadow-lg md:max-w-2xl  font-mono`;

export const LoginForm = () => {
  const [emailState, setEmail] = useState("");
  const [passwordState, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const createLoginRequest = (event) => {
    event.preventDefault();
    setIsloading(true);
    try {
      console.log(emailState);
      axios({
        method: "post",
        url: "http://localhost:5000/api/user/login/",
        data: JSON.stringify({
          email: emailState,
          password: passwordState,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          console.log(res);
          setIsloading(false);
          setIsLoggedIn(res.status === 200);
        })
        .catch((err) => {
          console.log("errerrerrerrerrerr");
          setIsloading(false);
          setIsLoggedIn(false);
        });
      console.log("userLoginResponse");
    } catch (error) {
      console.log(error);
      setIsloading(false);
      setIsLoggedIn(false);
    }
  };

  return (
    <div className={formContainerStyle}>
      {isLoading ? (
        <div className="flex justify-center p-8">
          <Spinner loading={isLoading} />
        </div>
      ) : null}

      {(isLoading && isLoggedIn)? null : (
        <div>
          <h1 className="text-2xl text-center capitalize tracking-wide text-black text-bold font-serif">
            login to your store
          </h1>
          <form>
            {/* ex. <RotateLoader  color={color} loading={loading} css={override} size={150} /> */}
            {buildInputGroup("Email", "email", "email", emailState, setEmail)}
            {buildInputGroup(
              "password",
              "password",
              "password",
              passwordState,
              setPassword
            )}
            {buildSubmitGroup("Login", createLoginRequest)}
            {/* {isLoggedIn ? <h1>Success</h1> : <h1>Failed</h1>} */}
          </form>
        </div>
      )}
    </div>
  );
};

const buildInputGroup = (lbl, lblFor, inputType, dataState, setData) => {
  return (
    <div className={divInputStyle}>
      <label htmlFor={lblFor} className={labelStyle}>
        {lbl}
      </label>

      <input
        type={inputType}
        name={lblFor}
        id={lblFor}
        className={inputStyle}
        value={dataState}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
};

function buildSubmitGroup(value, handleAction) {
  return (
    <div className={divSubmitStyle}>
      <button className={submitStyle} onClick={handleAction}>
        {value}
      </button>
    </div>
  );
}
