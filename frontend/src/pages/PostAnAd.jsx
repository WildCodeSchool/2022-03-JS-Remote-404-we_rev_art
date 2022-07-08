import React from "react";
import "../style/PostAnAd.css";
import MiniHeader from "../components/miniHeader";
import PostAnAdForm from "../components/PostAnAdForm";

function PostAnAd() {
  return (
    <div>
      <MiniHeader index={7} />
      <PostAnAdForm />
    </div>
  );
}

export default PostAnAd;
