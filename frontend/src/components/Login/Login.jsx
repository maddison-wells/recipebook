import { GoogleLogin } from "react-google-login";
import React from "react";

const clientId =
  "138139961564 - r074ans3qdt0duoi9acto3hgjkstrvqi.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res) => {
    console.log("Login success:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login failure: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={single_host - origin}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
