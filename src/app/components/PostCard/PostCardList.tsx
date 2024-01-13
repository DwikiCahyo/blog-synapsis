"use client";

import React, { useState } from "react";
import PostCard from "./PostCard";
import PostCardTitle from "./component/PostCardTitle";
import PostCardBody from "./component/PostCardBody";
import { useFetchPost } from "@/app/hooks/posts/useFetchPost";
import PostCardComment from "./component/PostCardComment";
import PostCardButton from "./component/PostCardButton";
import Loading from "./Loading";
import SearchCard from "../SearchCard/SearchCard";
import { useSearchParams } from "next/navigation";

export default function PostCardList() {
  const searchParams = useSearchParams();
  const titleQueryParams = searchParams.get("title") || undefined;
  const { data, isLoading } = useFetchPost(titleQueryParams);

  if (isLoading) return <Loading mssg="Post" />;

  return (
    <>
      {titleQueryParams && (
        <h1 className="mb-4 font-bold text-xl">
          Search by keyword : {titleQueryParams}
        </h1>
      )}

      {data?.length === 0 && <h1 className="mt-3">Not Found</h1>}
      {data &&
        data.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            title={<PostCardTitle />}
            body={<PostCardBody />}
            comment={<PostCardComment postId={post.id} />}
            action={<PostCardButton />}
          />
        ))}
    </>
  );
}
