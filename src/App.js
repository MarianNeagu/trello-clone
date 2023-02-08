import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/board/:id" element={<h1>Board</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
