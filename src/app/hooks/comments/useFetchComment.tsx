"use client";

import { Comment } from "@/app/types/types";
import apiInstance from "@/app/utils/axios";
import { useQuery } from "@tanstack/react-query";

async function fetchCommentByPost(id: number) {
  const response = await apiInstance.get(`comments?post_id=${id}`);
  return response.data;
}

export function useFetchCommentByPost(id: number) {
  return useQuery<Comment[]>({
    queryKey: ["comments", { id }],
    queryFn: () => fetchCommentByPost(id),
  });
}
