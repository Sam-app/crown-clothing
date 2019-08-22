import React from "react";

import "./sign-in-and-sign-up.syle.scss";
import SignUp from "../../sign-up/sing-up.component";
import SignIn from "../../../components/sign-in/sign-in.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
