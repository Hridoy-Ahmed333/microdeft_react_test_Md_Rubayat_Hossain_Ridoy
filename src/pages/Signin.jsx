import { useState } from "react";
import Login from "../components/Login";
import Registration from "../components/Registration";

function Signin() {
  const [switched, setSwitched] = useState(false);
  return (
    <div>
      {switched ? (
        <Registration setSwitched={setSwitched} />
      ) : (
        <Login setSwitched={setSwitched} />
      )}
    </div>
  );
}

export default Signin;
