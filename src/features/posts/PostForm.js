import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded, postsSelector } from "./postsSlice";
import { nanoid } from "nanoid";

function PostForm() {
  const [post, setPost] = useState("");
  const [lastElement, setLastElement] = useState();
  const dispatch = useDispatch();

  // get posts to be rendered
  const posts = useSelector(postsSelector);

  function handlePostChange(e) {
    setPost(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    dispatch(
      postAdded({
        id: nanoid(),
        text: post,
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      })
    );

    setPost("");
  }

  return (
    <form className="w-[95%] h-[7%] rounded-md  mb-7 mx-auto flex justify-between">
      <input
        value={post}
        onChange={handlePostChange}
        type="text"
        placeholder="Create a Post"
        className="w-[80%] h-[100%] rounded-md bg-purple-50 z-50 pl-5"
      ></input>
      <button
        onClick={submitHandler}
        className="hover:text-white w-[18%] hover:translate-x-3 h-[100%] rounded-md bg-purple-50 hover:cursor-pointer hover:bg-emerald-700 transition-all duration-200 z-50"
      >
        Send
      </button>
    </form>
  );
}

export default PostForm;
