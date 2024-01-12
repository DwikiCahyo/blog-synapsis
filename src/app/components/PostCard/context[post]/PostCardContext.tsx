"use client";

import { Post } from "@/app/types/types";
import { createContext, useContext } from "react";

interface PostContext {
  post: Post;
}

const PostCardContext = createContext<PostContext | null>(null);

export function usePostCardContext() {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error("Post context must rendered as a child of provider");
  }

  return context;
}

export default PostCardContext;
