import React, { ReactNode } from "react";
import PostCardContext from "./context[post]/PostCardContext";
import { Post } from "@/app/types/types";

type PostCardProps = {
  post: Post;
  title: ReactNode;
  body: ReactNode;
  user?: ReactNode;
  comment?: ReactNode;
  action?: ReactNode;
  actionComment?: ReactNode;
};

export default function PostCard({
  post,
  title,
  body,
  user,
  comment,
  action,
  actionComment,
}: PostCardProps) {
  return (
    <PostCardContext.Provider value={{ post }}>
      <div className="w-full rounded-md border border-primary py-4 px-6 mb-2">
        {title}
        {user}
        {body}
        <div className="mt-[15px] flex justify-between items-center">
          {comment}
          {action}
          {actionComment}
        </div>
      </div>
    </PostCardContext.Provider>
  );
}
