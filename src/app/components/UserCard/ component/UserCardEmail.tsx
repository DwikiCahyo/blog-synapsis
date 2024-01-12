import React from "react";
import { useUserContext } from "../context[user]/UserCardContext";

export default function UserCardEmail() {
  const { user } = useUserContext();
  return (
    <h1 className="mt-1 font-normal text-[10px] md:text-[14px] overflow-hidden text-white">
      {user.email}
    </h1>
  );
}
