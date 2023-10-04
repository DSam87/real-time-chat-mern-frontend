import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { postsSelector } from "./postsSlice";

import Post from "./Post";
import { animateScroll, animateScroll as scroll } from "react-scroll";
import PostForm from "./PostForm";

const PostBoard = () => {
  const posts = useSelector(postsSelector);

  // check if this is a first render by checking last element if it is null, we do not run it
  // if it is we set the last element to be selected for other methods.
  useEffect(() => {
    const options = {
      containerId: "containerElement",
      duration: 500,
      smooth: true,
    };
    animateScroll.scrollToBottom(options);
  });

  const renderedPosts = posts.map((post, index, arr) => {
    const { username, text, img, likes } = post;

    return <Post text={text} img={img} likes={likes}></Post>;
  });

  animateScroll.scrollToBottom({
    containerId: "containerElement",
    duration: 500,
    smooth: true,
  });

  return (
    <>
      {/* chat screen */}
      <div className="flex flex-col h-full relative ">
        <div className="p-6 h-full absolute w-full opacity-5 rounded-lg bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 z-40 "></div>{" "}
        <div className=" overflow-auto translate-x-[-20px] translate-y-5 p-6 h-full absolute bg-white w-full opacity-5 rounded-lg bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 z-40 "></div>{" "}
        <div className="overflow-auto w-full div flex flex-col justify-start h-full rounded-lg items-center ">
          <div
            id="containerElement"
            className="overflow-auto  flex flex-col justify-start w-auto max-w-[95%] h-[85%]  bg-opacity-60 pr-8 rounded-md bg-purple-50 m-3 mt-7 absolute mx-auto  z-40 "
          >
            <div className=" flex flex-col flex-auto">
              {/* a post item */}
              {renderedPosts}
            </div>
          </div>
        </div>
        {/* make post */}
        <PostForm />
      </div>
    </>
  );
};

export default PostBoard;
