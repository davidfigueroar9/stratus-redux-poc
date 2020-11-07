import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selector } from "./domains/Auth";

const { isUserLogin } = selector;

interface PrivateRoutesProps {
  children?: React.ReactNode;
  path: string;
}

function PrivateRoutes({ children, path }: PrivateRoutesProps) {
  const isLogin = useSelector(isUserLogin);
  return (
    <Route path={path}>{isLogin ? children : <Redirect to="/auth" />}</Route>
  );
}

export default PrivateRoutes;
