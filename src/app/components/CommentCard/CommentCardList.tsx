"use client";

import { useFetchCommentByPost } from "@/app/hooks/comments/useFetchComment";
import React from "react";
import CommentCard from "./CommentCard";
import ComentName from "./component/ComentName";
import CommentEmail from "./component/CommentEmail";
import CommentBody from "./component/CommentBody";

interface CommentCardListProps {
  user_id: number;
}

export default function CommentCardList({ user_id }: CommentCardListProps) {
  const { data, isLoading } = useFetchCommentByPost(user_id);

  const commentLength = data?.length;

  return (
    <div className="mt-4">
      <h1 className="font-bold">{commentLength} Comment</h1>
      {data?.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          name={<ComentName />}
          email={<CommentEmail />}
          body={<CommentBody />}
        />
      ))}
    </div>
  );
}
