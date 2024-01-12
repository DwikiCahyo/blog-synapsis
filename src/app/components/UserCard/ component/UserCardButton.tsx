import Link from "next/link";
import React from "react";
import { useUserContext } from "../context[user]/UserCardContext";

export default function UserCardButton() {
  const { user } = useUserContext();
  return (
    <Link href={`user/detail/${user.id}`}>
      <button className="text-[15px] font-semibold mt-5 hover:text-primary hover:underline hover:font-bold">
        Detail
      </button>
    </Link>
  );
}
