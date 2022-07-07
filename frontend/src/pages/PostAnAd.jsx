import React from "react";
import "../style/PostAnAd.css";
import MiniHeader from "../components/miniHeader";
import PostProject from "../components/PostProject";

function PostAnAd() {
  return (
    <div>
      <MiniHeader index={7} />
      <PostProject />
    </div>
  );
}

export default PostAnAd;
