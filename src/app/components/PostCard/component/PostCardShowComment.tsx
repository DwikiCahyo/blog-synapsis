import React from "react";
import { twMerge } from "tailwind-merge";

interface ShowCommentInterface {
  className?: string;
  handleShowComment?: () => void;
  visibleComment: boolean;
}
export default function PostCardShowComment({
  className,
  handleShowComment,
  visibleComment,
}: ShowCommentInterface) {
  const buttonText = visibleComment ? "Hide" : "Show";
  return (
    <>
      <button
        className={twMerge(
          "font-normal text-sm text-slate-400 hover:text-primary",
          className
        )}
        onClick={handleShowComment}
      >
        {`${buttonText} Comment`}
      </button>
    </>
  );
}
