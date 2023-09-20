import styled from "styled-components";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../index";
export const ProtectedRoute = ({
  user,
  children,
  redirectTo = "/login",
}) => {
  const {isAuth} = useAuthStore();
  console.log("Protector auth",isAuth)
  if (user==undefined) return <Navigate to={redirectTo} replace/>;
  return children ? children : <Outlet />;
};
