"use client";

import CommentCardList from "@/app/components/CommentCard/CommentCardList";
import Loading from "@/app/components/PostCard/Loading";
import PostCard from "@/app/components/PostCard/PostCard";
import PostCardBody from "@/app/components/PostCard/component/PostCardBody";
import PostCardComment from "@/app/components/PostCard/component/PostCardComment";
import PostCardShowComment from "@/app/components/PostCard/component/PostCardShowComment";
import PostCardTitle from "@/app/components/PostCard/component/PostCardTitle";
import { useFetchPostById } from "@/app/hooks/posts/useFetchPost";
import React, { useState } from "react";

export default function DetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [isShow, setShow] = useState<boolean>(false);
  const { data, isLoading } = useFetchPostById(id);

  function handleShow() {
    const showButton = isShow ? setShow(false) : setShow(true);
    return showButton;
  }

  if (isLoading)
    return (
      <section className="mx-2 md:mx-10 my-20 md:my-20">
        <Loading mssg="Post" />
      </section>
    );

  if (data) {
    return (
      <>
        <div>
          <PostCard
            post={data}
            title={<PostCardTitle />}
            body={<PostCardBody className="line-clamp-0" />}
            comment={<PostCardComment postId={data.id} />}
            actionComment={
              <PostCardShowComment
                handleShowComment={handleShow}
                visibleComment={isShow}
              />
            }
          />
        </div>
        {isShow && <CommentCardList user_id={data.id} />}
      </>
    );
  }
}
