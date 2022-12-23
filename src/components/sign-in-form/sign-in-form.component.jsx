import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import "../form-input/form-input.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
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
    <div className="sign-up-container">
      <h2>Har du redan ett konto?</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Logga in</button>
        <button type="button" onClick={signInWithGoogle}>
          Logga in med Google
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
