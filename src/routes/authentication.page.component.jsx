import { useState } from "react";
import SignUpForm from "../components/sign-up-form/sign-up-form.component";
import SignInForm from "../components/sign-in-form/sign-in-form.component";
import Nav from "../components/nav/nav.component";
import "./authentication.page.component.scss";
import Lightbulb from "../assets/light_bulb_transparent.png";
import Robot from "../assets/robotTransparent.png";

const Authentication = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="authentication-page">
      <img className="light-bulb" src={Lightbulb} alt="light bulb" />
      <img className="robot" src={Robot} alt="robot logo" />
      <Nav />
      <div className="content-container">
        {currentForm === "login" ? (
          <SignInForm onFormSwitch={toggleForm} currentForm={currentForm} />
        ) : (
          <SignUpForm onFormSwitch={toggleForm} currentForm={currentForm} />
        )}
      </div>
    </div>
  );
};

export default Authentication;
