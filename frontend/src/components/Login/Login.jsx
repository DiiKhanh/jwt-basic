import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[500px] w-[400px] bg-[#ccc] flex items-center flex-col">
      <div className="my-4 text-3xl font-bold"> Log In</div>
      <form className="flex flex-col my-5 mx-auto w-[250px] gap-2 justify-start font-semibold text-[18px]">
        <label>USERNAME</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="border-none w-full rounded-[6px] p-[0.4rem] my-1 outline-none"
        />
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="border-none w-full rounded-[6px] p-[0.4rem] my-1 outline-none"
        />
        <button
          type="submit"
          className="bg-white tex-[#333] hover:bg-blue-500 p-[0.65rem] mt-4"
        >
          Continue
        </button>
      </form>
      <div className="text-xl"> Don't have an account yet? </div>
      <Link className="text-xl hover:text-blue-500" to="/register">
        Register one for free
      </Link>
    </div>
  );
};

export default Login;
