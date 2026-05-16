import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentDetails from "./pages/StudentDetails";
import Scholarship from "./pages/Scholarship";
import Payment from "./pages/Payment";
import CGPACalculator from "./pages/CGPACalculator";

function Footer() {
  return (
    <footer>
      copyright@24071A05J2
    </footer>
  );
}

function App() {
  return (
    <div>
      <nav>
        <h2>Student Management System</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/details">Student Details</Link>
          <Link to="/scholarship">Scholarship</Link>
          <Link to="/payment">Payment</Link>
          <Link to="/cgpa">CGPA Calculator</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<StudentDetails />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cgpa" element={<CGPACalculator />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;