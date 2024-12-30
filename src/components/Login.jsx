import { useState } from "react";
import { login } from "../api/api";

function Login({ setSwitched }) {
  const [token, setToken] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSwitching = (e) => {
    e.preventDefault();
    setSwitched((switched) => !switched);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      console.log(data.data.token);
      setToken(data.data.token);
      localStorage.setItem("authToken", data.data.token);
      console.log("Login Success:", data);
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="sn-container">
      <div className="fst-form-container">
        <div className="fst-left-section">
          <h1>Login</h1>
          <form className="fst" onSubmit={handleLoginSubmit}>
            <div className="fst-input-group">
              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>
            <div className="fst-input-group">
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
            <button type="submit" className="fst-btn">
              Login
            </button>
          </form>
          <div className="switch" onClick={handleSwitching}>
            Want to Register? <span>Sign Up</span>
          </div>
        </div>
        <div className="fst-right-section">
          <h1>WELCOME BACK!</h1>
          <p>Login to continue exploring our website.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
