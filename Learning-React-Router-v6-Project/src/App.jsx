import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Users from "./components/Users/Users.jsx";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import SearchUser from "./components/SearchUser/SearchUser.jsx";
import Login from "./components/Login/Login.jsx";
import AuthProfile from "./components/AuthProfile/AuthProfile.jsx";
import { Route, Routes, Navigate } from "react-router-dom";

import React, { useState } from "react";
function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar isLogged={isLogged} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route exact path="/users/user/:username" element={<UserProfile />} />
          <Route path="/search" element={<SearchUser />} />
          <Route
            path="/login"
            element={
              <Login setIsLogged={setIsLogged} setUsername={setUsername} />
            }
          />
          <Route
            path="/authProfile"
            element={
              isLogged ? (
                <AuthProfile username={username} />
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
