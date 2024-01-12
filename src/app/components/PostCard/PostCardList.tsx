"use client";

import React, { useState } from "react";
import PostCard from "./PostCard";
import PostCardTitle from "./component/PostCardTitle";
import PostCardBody from "./component/PostCardBody";
import PostCardUploader from "./component/PostCardUploader";
import { useFetchPost } from "@/app/hooks/posts/useFetchPost";
import PostCardComment from "./component/PostCardComment";
import PostCardButton from "./component/PostCardButton";
import Loading from "./Loading";
import SearchCard from "../SearchCard/SearchCard";

export default function PostCardList() {
  const [page, setPage] = useState(1);
  const [isTitle, setTitle] = useState("");
  const { data, isLoading } = useFetchPost(page, isTitle);

  function handlePage() {
    setPage((prev) => prev + 1);
  }

  function handleSearch(title: string) {
    setTitle(title);
  }

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/4  h-52 ">
          <SearchCard handleSearch={handleSearch} />
        </div>
        <div className=" w-full md:w-3/4 bg-secondary ">
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
        </div>
      </div>
    </>
  );
}
