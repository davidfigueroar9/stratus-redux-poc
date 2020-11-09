import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import classnames from "classnames";

import { useAppDispatch } from "App/store";
import PageLayout from "components/PageLayout";

import { login } from "../../authSlice";
import { getLoginStatus } from "../../authSelectors";

function LoginPage() {
  const dispatch = useAppDispatch();
  const { isLoading, isError, isLogin } = useSelector(getLoginStatus);

  const [formState, setFormState] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const { email, password } = formState;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const buttonClass = classnames("button", "is-primary", {
    "is-loading": isLoading,
  });

  return (
    <PageLayout title="Tienda Nube">
      {isLogin && <Redirect to="/orders" />}
      <div className="container p-3">
        {isError && (
          <div className="notification is-danger">
            Email o contraseña invalidos!
          </div>
        )}
        <form className="card" onSubmit={handleOnSubmit}>
          <div className="card-content">
            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="control">
                <input
                  id="email"
                  className="input"
                  onChange={handleOnChange}
                  name="email"
                  type="text"
                  value={email}
                  required
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <div className="control">
                <input
                  id="password"
                  className="input"
                  onChange={handleOnChange}
                  required
                  value={password}
                  type="password"
                  name="password"
                />
              </div>
            </div>
            <div className="control">
              <button className={buttonClass}>Iniciar sesion</button>
            </div>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}

export default LoginPage;
