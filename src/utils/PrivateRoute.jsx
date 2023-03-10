import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

const PrivateRoute = () => {
  const [cookies] = useCookies(["user"]);
  console.log(cookies.user);

  return cookies.user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
