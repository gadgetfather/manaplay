import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import * as styles from "./SignupPage.module.css";
import { signupReducer } from "./signupReducer";
import { validate } from "./validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialObj = {
  email: "",
  password: "",
  firstName: "",
  isSubmit: false,
  errors: {},
};
export function SignupPage() {
  const { signup, apiErrors } = useAuth();
  const [formValues, formValuesDispatch] = useReducer(
    signupReducer,
    initialObj
  );
  const { errors, isSubmit } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    formValuesDispatch({ type: "SUBMIT" });
    formValuesDispatch({ type: "ERRORS", payload: validate(formValues) });
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      signup(formValues.email, formValues.password, formValues.firstName);
      toast.success("Account has been created", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [errors]);

  return (
    <main className={styles.main_content_login}>
      <h1 className={styles.page_title}>Signup</h1>

      <form onSubmit={(e) => handleSubmit(e)} className={styles.form_container}>
        <label htmlFor="Name">Name</label>
        <input
          onChange={(e) =>
            formValuesDispatch({
              type: "ON_CHANGE",
              name: e.target.name,
              payload: e.target.value,
            })
          }
          name="firstName"
          type="Name"
          value={formValues.firstName}
        />
        {errors.firstName ? (
          <p className="error-text">{errors.firstName}</p>
        ) : (
          ""
        )}
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) =>
            formValuesDispatch({
              type: "ON_CHANGE",
              name: e.target.name,
              payload: e.target.value,
            })
          }
          name="email"
          type="email"
          value={formValues.email}
        />
        {errors.email ? <p className="error-text">{errors.email}</p> : ""}

        <label htmlFor="password">Password</label>
        <input
          onChange={(e) =>
            formValuesDispatch({
              type: "ON_CHANGE",
              name: e.target.name,
              payload: e.target.value,
            })
          }
          type="password"
          name="password"
          id="password"
          value={formValues.password}
        />
        {errors.password ? <p className="error-text">{errors.password}</p> : ""}

        <button className={`btn btn-primary ${styles.submit_btn}`}>
          Create account
        </button>
        <Link className="link" to="/login">
          Already Have account?
        </Link>
      </form>
    </main>
  );
}
