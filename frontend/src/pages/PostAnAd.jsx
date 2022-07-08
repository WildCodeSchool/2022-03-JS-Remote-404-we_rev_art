import React from "react";
import { Helmet } from "react-helmet";
import "../style/PostAnAd.css";
import MiniHeader from "../components/miniHeader";
import PostAnAdForm from "../components/PostAnAdForm";

function PostAnAd() {
  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | PostAnAd </title>
      </Helmet>
      <MiniHeader index={7} />
      <PostAnAdForm />
    </div>
  );
}

export default PostAnAd;
