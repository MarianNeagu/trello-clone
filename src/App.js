import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Board from "./pages/Board";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Test from "./pages/Test";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/board/:id" element={<Board />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
