import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Invoice from "./Components/Invoice/Invoice";
import ReviewAndRating from "./Components/Rating/Rating";
import { QuickBook } from "./Components/QuickBook/Quickbook";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/ReviewandRating" element={<ReviewAndRating />} />
          <Route path="/quickbook" element={<QuickBook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
