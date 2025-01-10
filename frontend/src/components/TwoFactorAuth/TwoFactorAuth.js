import React from "react";
import "./TwoFactorAuth.css";

function TwoFactorAuth({ open }) {
    console.log("TwoFactorAuth", open);
  return (
    <div className="two-factor-auth">
      <div className="outer-container">
        <p>
          We've sent a 4-digit code to your email. Please enter it below to
          verify your identity.
        </p>
      </div>
    </div>
  );
}

export default TwoFactorAuth;
