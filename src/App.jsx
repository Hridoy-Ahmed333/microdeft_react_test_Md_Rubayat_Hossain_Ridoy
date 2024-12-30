import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import AddCourse from "./pages/AddCourse";
import ShowCourses from "./pages/ShowCourses";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/add" element={<AddCourse />} />
        <Route path="/courses" element={<ShowCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
