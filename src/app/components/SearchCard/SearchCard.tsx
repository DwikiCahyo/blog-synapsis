"use client";

import { fetchPost, useFetchPost } from "@/app/hooks/posts/useFetchPost";
import React, { useState } from "react";

interface SearchCardProps {
  handleSearch: (title: string) => void;
}
export default function SearchCard({ handleSearch }: SearchCardProps) {
  return (
    <div className="w-full border h-[200px] border-primary rounded-sm">
      <button onClick={() => handleSearch("Ter")}>Button</button>
    </div>
  );
}
