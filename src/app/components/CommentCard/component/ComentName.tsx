"use client";

import React from "react";
import { useCommentCardContext } from "../context[comment]/CommentCardContext";

export default function ComentName() {
  const { comment } = useCommentCardContext();
  return (
    <h1 className="font-bold text-[16px] text-white mt-1">{comment.name} </h1>
  );
}
