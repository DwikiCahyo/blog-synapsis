import React from "react";
import Image from "next/image";
import UserIcon from "../../../public/user.png";
import UserCardList from "../components/UserCard/UserCardList";
import Link from "next/link";

export default function user() {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl text-slate-200 ml-2 ">
          Total User : <span className="text-primary ml-1">30</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[35px] p-4 md:p-2">
          <UserCardList />
        </div>
        <Link href={"user/create"}>
          <button className=" font-bold text-[18px] hover:ring-2 hover:ring-primary rounded-l-full bg-primary fixed bottom-14 right-0 py-2 px-4 text-center">
            + create
          </button>
        </Link>
      </div>
    </>
  );
}
