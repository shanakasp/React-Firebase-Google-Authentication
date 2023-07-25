import React from "react";
import "./App.css";
import { signInWithGoogle, signOut, auth } from "./firebase-config";

function App() {
  const handleSignOut = () => {
    signOut();
    // Clear the local storage when signing out
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("profilePic");
  };

  const renderUserInfo = () => {
    if (localStorage.getItem("name")) {
      return (
        <div>
          <h1>{localStorage.getItem("name")}</h1>
          <h1>{localStorage.getItem("email")}</h1>
          <img src={localStorage.getItem("profilePic")} alt="Profile" />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      );
    } else {
      return (
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      );
    }
  };

  return <div className="App">{renderUserInfo()}</div>;
}

export default App;
