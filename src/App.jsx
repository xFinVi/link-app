import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  login,
  selectUser
} from "./components/redux/userRedurer/userSlice";

import Header from "./components/Header/header";
import Siderbar from "./components/Sidebar/Siderbar";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login/Login";
import "./App.css";
import { auth } from "./Utils/Firebase/firebase";
import Widgets from "./components/Widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=> {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.name,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // user logged out
        dispatch(logout());
      }
    })
  },[]);

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Siderbar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;


//  User avatar show logout When user is logged in

