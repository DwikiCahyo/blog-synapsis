"use client";

import { useFetchUserById } from "@/app/hooks/users/useFetchUser";
import React from "react";
import { FaUser } from "react-icons/fa";

interface PostCardUploaderProps {
  user_id: number;
}

export default function PostCardUploader({ user_id }: PostCardUploaderProps) {
  const { data, isLoading } = useFetchUserById(user_id);
  return (
    <div className="mt-[9px] flex items-center gap-1">
      <FaUser size="14px" color="gray" />
      <h6 className="text-sm font-normal text-slate-400">
        Posted by : {data?.name || "unknown"}
      </h6>
    </div>
  );
}
