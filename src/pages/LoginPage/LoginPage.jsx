import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { formValueReducer } from "./formValueReducer";
import * as styles from "./LoginPage.module.css";
import { validate } from "./validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialObj = { email: "", password: "", isSubmit: false, errors: {} };

export function LoginPage() {
  const { login } = useAuth();
  const [formValues, formValueDispatch] = useReducer(
    formValueReducer,
    initialObj
  );
  const { errors, isSubmit } = formValues;
  const handleSubmit = (e, formValues) => {
    e.preventDefault();
    formValueDispatch({ type: "SUBMIT" });
    formValueDispatch({ type: "VALIDATE", payload: validate(formValues) });
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      login(formValues.email, formValues.password);
    }
  }, [errors]);

  return (
    <>
      <main className={styles.main_content_login}>
        <ToastContainer />
        <h1 className={styles.page_title}>Login</h1>
        <form
          onSubmit={(e) => handleSubmit(e, formValues)}
          className={styles.form_container}
        >
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) =>
              formValueDispatch({
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
              formValueDispatch({
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
          {errors.password ? (
            <p className="error-text">{errors.password}</p>
          ) : (
            ""
          )}
          <button className={`btn btn-primary ${styles.submit_btn}`}>
            Login
          </button>
          <Link className="link" to="/signup">
            Dont Have account?
          </Link>
        </form>
      </main>
    </>
  );
}
