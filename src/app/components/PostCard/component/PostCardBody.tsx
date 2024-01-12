"use client";

import React from "react";
import { usePostCardContext } from "../context[post]/PostCardContext";
import { twMerge } from "tailwind-merge";

interface PostCardBody {
  className?: string;
}

export default function PostCardBody({ className }: PostCardBody) {
  const { post } = usePostCardContext();
  return (
    <div className={twMerge("mt-3 line-clamp-2", className)}>
      <p className="font-light text-[14px] text-justify">{post.body}</p>
    </div>
  );
}
