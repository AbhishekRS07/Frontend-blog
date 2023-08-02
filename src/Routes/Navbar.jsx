import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/blogs",
      title: "Blogs",
    },
    {
      path: "/blogs/create",
      title: "AddBlogs",
    },

    {
      path: "/login",
      title: "Login",
    },

    {
      path: "/signup",
      title: "SignUp",
    },
  ];
  return (
    <div
      style={{
        border: "1px solid",
        display: "flex",
        height: "60px",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {links.map((elem) => (
        <Link key={elem.path} to={elem.path}>
          {elem.title}
        </Link>
      ))}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
