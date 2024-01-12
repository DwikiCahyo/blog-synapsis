import React from "react";
import { useUserContext } from "../context[user]/UserCardContext";

export default function UserCardTitle() {
  const { user } = useUserContext();
  return (
    <h1 className="mt-3 font-bold text-[14px] md:text-[16px] text-primary">
      {user.name}
    </h1>
  );
}
