import React, { ReactNode } from "react";
import Image from "next/image";
import userIcon from "../../../../public/user.png";
import { Comment } from "@/app/types/types";
import CommentCardContext from "./context[comment]/CommentCardContext";

type CommentCardProps = {
  comment: Comment;
  body?: ReactNode;
  name?: ReactNode;
  email?: ReactNode;
};

export default function CommentCard({
  comment,
  name,
  email,
  body,
}: CommentCardProps) {
  return (
    <CommentCardContext.Provider value={{ comment }}>
      <div className="flex items-center mt-5 gap-4">
        <Image src={userIcon} alt="user-icon" width={30} height={30} />
        <div className="rounded-md max-w-fit border border-primary py-5 px-7">
          {name}
          {email}
          {body}
        </div>
      </div>
    </CommentCardContext.Provider>
  );
}
