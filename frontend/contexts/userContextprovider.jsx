import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const savedAddress = localStorage.getItem("homeAddress") || "";
  const name = localStorage.getItem("username") || "Guest";
  const [user, setUser] = useState({ homeAddress: savedAddress, username: name });

  // Login function
  const login = (username, homeAddress = "") => {
    setUser({ username, homeAddress });
    localStorage.setItem("username", username);
    localStorage.setItem("homeAddress", homeAddress);
  };

  // Logout function
  const logout = () => {
    setUser({ username: "Guest", homeAddress: "" });
    localStorage.removeItem("username");
    localStorage.removeItem("homeAddress");
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

