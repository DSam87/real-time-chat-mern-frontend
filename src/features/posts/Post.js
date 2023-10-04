import React from "react";

import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Post({ text, likes, img, id }) {
  return (
    <div
      id={id}
      className="flex flex-grow-0 flex-grow-0 flex-shrink basis-auto gap-3 justify-normal items-center h-[80px]  rounded-br-3xl mx-3 mt-3 mb-5"
    >
      <div className="flex flex-row bg-slate-900 p-3 justify-center align-middle items-center gap-3 rounded-br-3xl ">
        <img
          className="block rounded-full bg-white h-[70%] w-[70px] ml-3 hover:cursor-pointer z-50"
          src={`${img}`}
        ></img>
        <div className="flex  w-auto justify-center items-center rounded-full bg-white h-[55px]">
          <p className="flex-1 w-auto max-w-[800px] px-5">{text}</p>
        </div>
        <div className="heart-container w-[80px] mr-2 flex justify-center items-center relative hover:cursor-pointer z-50 max-w-[800px]">
          <FontAwesomeIcon
            className=" text-red-700 inline-block w-auto scale-[3] "
            icon={faHeart}
          ></FontAwesomeIcon>
          <p className="absolute text-1xl text-white">{likes}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
