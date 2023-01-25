import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [user, setUser] = useState("");
  return (
    <div className="relative top-0 left-0 right-0 flex gap-[100px] justify-end h-[70px] w-full bg-[#E4E4E4] text-[#333]] items-center px-[100px] text-3xl">
      <Link to="/" className="hover:text-blue-500">
        Home
      </Link>
      {user ? (
        <>
          <p className="text-red-500">
            Hi, <span> {user} </span>
          </p>
          <Link to="/logout" className="hover:text-blue-500">
            Log out
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="hover:text-blue-500">
            Login
          </Link>
          <Link to="/register" className="hover:text-blue-500">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
