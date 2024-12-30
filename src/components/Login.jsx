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
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
      <div onClick={handleSwitching}>Want to Register?</div>
    </div>
  );
}

export default Login;
