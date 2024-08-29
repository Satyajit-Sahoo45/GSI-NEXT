import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Invoice from "./Components/Invoice/Invoice";
import ReviewAndRating from "./Components/Rating/Rating";
import { QuickBook } from "./Components/QuickBook/Quickbook";
import AuthProvider from "./Provider/AuthProvider";
import { Profile } from "./Components/Profile/Profile";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/dashboard" element={<AuthProvider><Dashboard /> </AuthProvider>} />
          <Route path="/invoice" element={<AuthProvider><Invoice /></AuthProvider>} />
          <Route path="/ReviewandRating" element={<AuthProvider><ReviewAndRating /></AuthProvider>} />
          <Route path="/quickbook" element={<AuthProvider><QuickBook /></AuthProvider>} />
          <Route path="/profile" element={<AuthProvider><Profile /></AuthProvider>} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
