import React, { useState } from "react";

function Main() {
  const [fullname, setFullname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const [errorFullname, setErrorFullname] = useState("");
  const [errorSurname, setErrorSurname] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullname !== "") {
      if (fullname.length < 8) {
        setErrorFullname("fullname has min 8 kharakter");
      }
      console.log(fullname);
    } else {
      setErrorFullname("fullname is invalid");
    }
    if (surname !== "") {
      console.log(surname);
    } else {
      setErrorSurname("surname is invalid");
    }
    if (email !== "") {
      if (email !== /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) {
        setErrorEmail("email is not entered true");
      }
      console.log(email);
    } else {
      setErrorEmail("email is invalid");
    }
    if (password !== "") {
      console.log(password);
    } else {
      setErrorPassword("password is invalid");
    }
    if (repassword !== "") {
      if (password !== repassword) {
        setErrorRePassword("check the correctness of the passwords ");
      }
      console.log(repassword);
    } else {
      setErrorRePassword("repassword is invalid");
    }
  };

  return (
    <div className="main">
      <div className="LeftSide">
        <img src="https://i0.wp.com/journo.com.tr/wp-content/uploads/2021/07/ay-fotografi-nasil-cekilir.jpg?fit=927%2C960&ssl=1" />
      </div>
      <div className="RightSide">
        <span className="uk">English (UK)</span>
        <h1 className="h1">Create Account</h1>
        <div className="signup">
          <div className="signup-google">
            <div className="signimg">
              <img src="https://freesvg.org/img/1534129544.png" />
            </div>
            <div className="signdiv">Sign up with Google</div>
          </div>
          <div className="signup-facebook">
            <div className="fbimg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" />
            </div>
            <div className="fbdiv">Sign up with Facebook</div>
          </div>
          <div className="or">- OR -</div>
          <div className="fullname">
            <input
              className="input"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              placeholder="Full name"
            />
            {errorFullname && <div className="error">{errorFullname}</div>}
          </div>
          <div className="surname">
            <input
              className="input"
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
              placeholder="Surname"
            />
            {errorSurname && <div className="error">{errorSurname}</div>}
          </div>
          <div className="email">
            <input
              type="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email Address"
            />
            {errorEmail && <div className="error">{errorEmail}</div>}
          </div>
          <div className="password">
            <input
              className="input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            {errorPassword && <div className="error">{errorPassword}</div>}
          </div>
          <div className="repassword">
            <input
              className="input"
              type="password"
              onChange={(e) => setRePassword(e.target.value)}
              value={repassword}
              placeholder="Repassword"
            />
            {errorRePassword && <div className="error">{errorRePassword}</div>}
          </div>
          <div className="create-account">
            <button type="submit" onClick={handleSubmit}>
              Create Account
            </button>
          </div>
          <div className="already">
            <div className="alrhv">Already have a account?</div>
            <div className="login">Log in</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;