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
      if (data?.status) {
        setSwitched((switched) => !switched);
        alert("Success fully loggedn in");
      }
    } catch (error) {
      console.error(
        "Registration Error:",
        error.response?.data || error.message
      );
      alert(error);
    }
  };

  return (
    <div className="sn-container">
      <div className="fst-form-container">
        <div className="fst-left-section">
          <h1>Registration</h1>
          <form className="fst" onSubmit={handleRegistrationSubmit}>
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
            </div>
            <button type="submit" className="fst-btn">
              Register
            </button>
          </form>
          <div className="switch" onClick={handleSwitching}>
            Already have an account? <span>Log In</span>
          </div>
        </div>
        <div className="fst-right-section">
          <h1>WELCOME TO OUR WEBSITE!</h1>
          <p>You can find various types of courses in our website.</p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
