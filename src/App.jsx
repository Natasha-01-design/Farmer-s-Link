
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/signup";
import Login from "./pages/login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
