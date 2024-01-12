"use client";
import React from "react";
import { usePostCardContext } from "../context[post]/PostCardContext";
import Link from "next/link";

export default function PostCardButton() {
  const { post } = usePostCardContext();
  function handleDetailPost() {}
  return (
    <>
      <button
        className="text-sm font-bold hover:text-primary hover:underline"
        onClick={handleDetailPost}
      >
        <Link href={`/post/${post.id}`}>Read More </Link>
      </button>
    </>
  );
}
