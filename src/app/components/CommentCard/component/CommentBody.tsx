"use client";

import React from "react";
import { useCommentCardContext } from "../context[comment]/CommentCardContext";

export default function CommentBody() {
  const { comment } = useCommentCardContext();
  return (
    <p className="font-normal text-[14px] text-white mt-2">{comment.body}</p>
  );
}
