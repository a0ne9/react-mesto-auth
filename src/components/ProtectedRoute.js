import {Outlet, Navigate} from "react-router";

function ProtectedRoute(props) {
  return props.isLoggedIn ?  <Outlet /> : <Navigate to="/sign-in" />
}

export default ProtectedRoute