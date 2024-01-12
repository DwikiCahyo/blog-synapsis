"use client";

import React from "react";
import UserCardContext, {
  useUserContext,
} from "../context[user]/UserCardContext";

export default function UserCardStatus() {
  const { user } = useUserContext();

  return (
    <>
      {user.status === "active" ? (
        <div className="mt-3 bg-green-400  p-2 text-center rounded-xl w-[60px] md:w-[100px] ml-2 ">
          <h6 className="text-[12px] font-normal  text-white">Active</h6>
        </div>
      ) : (
        <div className="mt-3 bg-red-400  p-2 text-center rounded-xl w-[60px] md:w-[100px] ml-2 ">
          <h6 className="text-[12px] font-normal  text-white">Inactive</h6>
        </div>
      )}
    </>
  );
}
