import React, { useState } from "react";
import { auth } from "../../Utils/Firebase/firebase";

import logoImage from "../../assets/3dlogo.png";
import linkedInPic from "../../assets/linkedInPic.png";
import { useDispatch } from "react-redux";
import { login } from "../redux/userRedurer/userSlice";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        }))
      }).catch(err => alert(err));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <div className="login__images">
        <img src={linkedInPic} alt="" />
      </div>

      <form className="login__form">
        <img src={logoImage} alt="" />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name "
          required
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Add Profile Picture (Optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Add your email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Add your password"
          required
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        {" "}
        Not a member?{" "}
        <span className="login__register" onClick={handleRegister}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
