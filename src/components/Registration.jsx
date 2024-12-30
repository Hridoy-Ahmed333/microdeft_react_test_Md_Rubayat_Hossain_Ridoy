import { useState } from "react";
import { register } from "../api/api";
import "./signupfrom.css";

function Registration({ setSwitched }) {
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSwitching = (e) => {
    e.preventDefault();
    setSwitched((switched) => !switched);
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(registrationData);
      console.log("Registration Success:", data);
    } catch (error) {
      console.error(
        "Registration Error:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="container">
      <div className="fst-form-container">
        <div className="fst-left-section">
          <h1>Registration</h1>
          <form onSubmit={handleRegistrationSubmit}>
            <div className="fst-input-group">
              <input
                type="text"
                placeholder="Name"
                value={registrationData.name}
                onChange={(e) =>
                  setRegistrationData({
                    ...registrationData,
                    name: e.target.value,
                  })
                }
              />
              <i className="fas fa-user"></i>
            </div>
            <div className="fst-input-group">
              <input
                type="email"
                placeholder="Email"
                value={registrationData.email}
                onChange={(e) =>
                  setRegistrationData({
                    ...registrationData,
                    email: e.target.value,
                  })
                }
              />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="fst-input-group">
              <input
                type="password"
                placeholder="Password"
                value={registrationData.password}
                onChange={(e) =>
                  setRegistrationData({
                    ...registrationData,
                    password: e.target.value,
                  })
                }
              />
              <i className="fas fa-lock"></i>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
          <div className="switch" onClick={handleSwitching}>
            Already have an account? <span>Log In</span>
          </div>
        </div>
        <div className="right-section">
          <h1>WELCOME TO OUR WEBSITE!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
