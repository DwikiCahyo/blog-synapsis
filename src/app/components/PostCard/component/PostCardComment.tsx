"use client";

import React from "react";
import { useFetchCommentByPost } from "@/app/hooks/comments/useFetchComment";

interface PostCardCommentProps {
  postId: number;
}

export default function PostCardComment({ postId }: PostCardCommentProps) {
  const { data, isLoading } = useFetchCommentByPost(postId);

  const commentLength = data?.length || 0;

  return (
    <>
      {isLoading ? (
        <p className="text-sm font-light text-primary">Loading comment ...</p>
      ) : (
        <p className="text-sm font-light text-slate-400">
          {commentLength} comment
        </p>
      )}
    </>
  );
}
