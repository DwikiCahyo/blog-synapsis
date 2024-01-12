"use client";

import React from "react";
import { usePostCardContext } from "../context[post]/PostCardContext";

function PostCardTitle() {
  const { post } = usePostCardContext();
  return <h1 className="font-bold text-[18px]">{post.title}</h1>;
}

export default PostCardTitle;
