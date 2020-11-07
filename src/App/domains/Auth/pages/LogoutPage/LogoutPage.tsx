import React, { useEffect } from "react";
import { logout } from "../../authSlice";
import { isUserLogin } from "../../authSelectors";
import { useAppDispatch } from "../../../../store";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function LogoutPage() {
  const dispatch = useAppDispatch();
  const isLogin = useSelector(isUserLogin);
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  if (!isLogin) {
    return <Redirect to="/auth" />;
  }
  return null;
}

export default LogoutPage;
