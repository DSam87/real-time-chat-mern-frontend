import React, { useState, useEffect } from "react";
import Ball from "./Ball";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import PostBoard from "../features/posts/PostBoard";
// rounded-lg bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700
// bg-gradient-to-t from-slate-500 to-yellow-100
const Dashboard = () => {
  const navigate = useNavigate();

  const [cookies, removeCookie] = useCookies([]);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handlePostChange(e) {
    setPost(post);
  }

  async function submitPost() {
    console.log("sending post");

    const { data } = await axios.post(
      "http://localhost:3500/post",
      { email, username, post },
      { withCredentials: true }
    );
  }

  async function fetchPosts() {
    const { data } = await axios.get(
      "http://localhost:3500/post",
      {},
      { withCredentials: true }
    );

    console.log(data);

    setPosts(data);
  }

  useEffect(() => {
    console.log("check cookie");
    // check cookie
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/");
      }
      const { data } = await axios.post(
        "http://localhost:3500/auth",
        {},
        { withCredentials: true }
      );

      const { username, email, status } = data;

      setUsername(username);
      setEmail(email);

      return status
        ? toast(`Hello ${username}`, { position: "top-right" })
        : (removeCookie("token"), navigate("/"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    console.log("removeing token");
    removeCookie("token");
    navigate("/");
  };

  return (
    // passing around the dash container
    <div className="w-full h-full p-10 ">
      {/* page container */}
      <div className="w-full h-full flex flex-row justify-evenly items-center align-middle ">
        {/* Left nav bar container*/}
        <div className="w-[20%] relative pl-2 flex flex-col justify-between items-center h-full rounded-lg">
          {/* left nav bar for position */}
          <div className="relative w-full h-full pl-2 flex flex-col justify-between items-center rounded-lg  z-40 ">
            {/*  left nav bar for style*/}
            <div className="absolute w-full h-full pl-2 flex flex-col justify-evenly items-center  rounded-lg bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 z-40 opacity-10"></div>
            <div className="translate-x-[-20px] translate-y-5 p-6 h-full absolute w-full  pl-2 flex flex-col justify-evenly items-center  rounded-lg bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 z-40 opacity-10"></div>
            {/* item */}
            <div className=" flex justify-center items-center align-middle w-[95%] h-[50px] mt-8 hover:cursor-pointer z-50 hover:translate-x-5 hover:drop-shadow-lg transform transition-all duration-200 ">
              <div className=" flex justify-center items-center align-middle w-[95%] h-[50px] rounded-md bg-gradient-to-r from-gray-100 to-gray-300  drop-shadow-xl opacity-20"></div>

              <p className="text-white text-[12px] tracking-[8px] uppercase !opacity-100 absolute">
                Real Time Chatroom
              </p>
            </div>
            {/* item container */}
            <div className=" flex flex-col justify-center items-center align-middle w-full h-[6px] gap-8 drop hover:cursor-pointer ">
              {/* item */}
              <div className=" flex justify-center items-center align-middle w-[95%] h-[50px] drop hover:cursor-pointer z-50 hover:translate-x-5 hover:drop-shadow-lg transform transition-all duration-200">
                <div className=" flex justify-center items-center align-middle w-[95%] h-[50px] rounded-md bg-gradient-to-r from-gray-100 to-gray-300  drop-shadow-xl opacity-20"></div>
                <p className="text-white text-sm tracking-[8px] uppercase !opacity-100 absolute">
                  Liked Posts
                </p>
              </div>
              {/* item */}
              <div className=" flex justify-center items-center align-middle w-[95%] h-[50px] drop hover:cursor-pointer z-50 hover:translate-x-5 hover:drop-shadow-lg transform transition-all duration-200">
                <div className=" flex justify-center items-center align-middle w-[95%] h-[50px] rounded-md bg-gradient-to-r from-gray-100 to-gray-300  drop-shadow-xl opacity-20"></div>
                <p className="text-white text-sm tracking-[8px] uppercase !opacity-100 absolute">
                  Posts
                </p>
              </div>
              {/* item */}
              <div className=" flex justify-center items-center align-middle w-[95%] h-[50px] drop hover:cursor-pointer z-50 hover:translate-x-5 hover:drop-shadow-lg transform transition-all duration-200">
                <div className=" flex justify-center items-center align-middle w-[95%] h-[50px] rounded-md bg-gradient-to-r from-gray-100 to-gray-300  drop-shadow-xl opacity-20"></div>
                <p className="text-white text-sm tracking-[8px] uppercase !opacity-100 absolute">
                  Account
                </p>
              </div>
            </div>
            {/* item */}
            <div className=" flex justify-center items-center align-middle w-[95%] h-[50px] mb-8 hover:cursor-pointer z-50 hover:translate-x-5 hover:drop-shadow-lg transform transition-all duration-200  ">
              <div className=" flex justify-center items-center align-middle w-[95%] h-[50px] rounded-md bg-gradient-to-r from-gray-100 to-gray-300  drop-shadow-xl opacity-20 "></div>
              <p
                onClick={Logout}
                className="text-white text-sm tracking-[8px] uppercase !opacity-100 absolute "
              >
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* rigth chat bar */}
        <div className="w-[55%] h-full flex flex-col justify-center align-middle opacity-90">
          <PostBoard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
