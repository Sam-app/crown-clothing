import React from "react";

import "./sign-in-and-sign-up.style.scss";
import SignUp from "../../components/sign-up/sing-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
