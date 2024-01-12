"use client";

import { Comment } from "@/app/types/types";
import { createContext, useContext } from "react";

interface CommentContext {
  comment: Comment;
}

const CommentCardContext = createContext<CommentContext | null>(null);

export function useCommentCardContext() {
  const context = useContext(CommentCardContext);
  if (!context) {
    throw new Error("Comment context must rendered as a child of provider");
  }

  return context;
}

export default CommentCardContext;
