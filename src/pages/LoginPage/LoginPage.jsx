import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { formValueReducer } from "./formValueReducer";
import * as styles from "./LoginPage.module.css";
import { validate } from "./validate";

const initialObj = { email: "", password: "", errors: {} };

export function LoginPage() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues, formValueDispatch] = useReducer(
    formValueReducer,
    initialObj
  );
  const { errors } = formValues;
  const handleSubmit = (e, formValues) => {
    e.preventDefault();
    setIsSubmit(true);
    formValueDispatch({ type: "VALIDATE", payload: validate(formValues) });
  };
  console.log(formValues);
  return (
    <>
      <main className={styles.main_content_login}>
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
