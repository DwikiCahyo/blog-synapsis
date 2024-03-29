"use client";

import { Post } from "@/app/types/types";
import apiInstance from "@/app/utils/axios";
import { useQuery } from "@tanstack/react-query";

export async function fetchPost(title?: string) {
  const response = await apiInstance.get("posts", {
    params: {
      per_page: 30,
      title: title,
    },
  });
  return response.data;
}

async function fetchPostById(post_id: string) {
  const response = await apiInstance.get(`posts/${post_id}`);
  return response.data;
}

export function useFetchPost(title?: string) {
  return useQuery<Post[]>({
    queryFn: () => fetchPost(title),
    queryKey: ["posts", { title }],
  });
}

export function useFetchPostById(post_id: string) {
  return useQuery<Post>({
    queryFn: () => fetchPostById(post_id),
    queryKey: ["post"],
  });
}
