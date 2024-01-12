"use client";

import React from "react";
import { useCommentCardContext } from "../context[comment]/CommentCardContext";

export default function CommentEmail() {
  const { comment } = useCommentCardContext();
  return (
    <h3 className=" font-semibold text-[12px] text-slate-400 mt-1">
      {comment.email}
    </h3>
  );
}
