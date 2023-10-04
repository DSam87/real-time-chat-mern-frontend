import React from "react";
import Ball from "./Ball";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Where ball will scroll up too */}
      <div className=" w-[1300px] h-[800px] relative flex flex-col justify-end items-center">
        {/* <Ball /> */}
        <h1 className="text-white text-4xl tracking-[16px] uppercase opacity-90 pb-[40px]">
          Real Time Chat
        </h1>
        <p className="text-white text-xl tracking-[12px] text-center uppercase opacity-90  pb-[50px]">
          A quick and responsive full stack application for messageing, liking
          posts and making friends.
        </p>
        <div className="button-layout flex flex-row justify-center items-center align-middle w-[800px] gap-24">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="hover:scale-105 hover:bg-emerald-500 duration-300 transform transition rounded-full bg-emerald-400 bg-opacity-100 opacity-90 border-solid border-0 border-emerald-700 w-80 h-16 tracking-[7px] text-xl text-white uppercase "
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="hover:scale-105 hover:bg-emerald-500 duration-300 transform transition rounded-full bg-emerald-400 bg-opacity-100 opacity-90 border-solid border-0 border-emerald-700 w-80 h-16 tracking-[7px] text-xl	 text-white uppercase "
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
