import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "../form-input/form-input.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = ({ onFormSwitch, currentForm }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Inloggningsuppgifter stämmer ej");
      } else if (error.code === "auth/user-not-found") {
        alert("Inloggningsuppgifter stämmer ej");
      } else {
        alert("Ops! Något gick fel");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <div className="form-switch-btn-container">
        <button
          className={currentForm === "login" ? "btnActive" : ""}
          onClick={() => onFormSwitch("login")}
        >
          Jag har ett konto
        </button>
        <button onClick={() => onFormSwitch("register")}>Skapa konto</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="div-inputs">
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Lösenord"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div className="div-btn">
          <button type="submit">Logga in</button>
          <button
            className="google-btn"
            type="button"
            onClick={signInWithGoogle}
          >
            <div className="google-btn-items">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google icon"
              />
              <p>Google Login</p>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
