import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    alert("You need to log in to access this page.");
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
