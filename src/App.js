import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Board from "./pages/Board";
import Login from "./pages/Login";
import Test from "./pages/Test";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
