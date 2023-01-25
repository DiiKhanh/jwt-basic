import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Login, Home, Register } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="text-[#333] flex justify-center items-center mt-20 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
