import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const PrivateRoute = ({ auth, children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  if (!cookies.user) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
