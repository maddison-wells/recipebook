import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "138139961564 - r074ans3qdt0duoi9acto3hgjkstrvqi.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = (rs) => {
    console.log("Login out successful");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
};

export default Logout;
