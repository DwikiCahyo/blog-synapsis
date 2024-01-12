import React, { ReactNode } from "react";
import Image from "next/image";
import UserIcon from "../../../../public/user.png";
import { User } from "@/app/types/types";
import UserCardContext from "./context[user]/UserCardContext";

type UserCardProps = {
  user: User;
  status?: ReactNode;
  name?: ReactNode;
  email?: ReactNode;
  action?: ReactNode;
};

export default function UserCard({
  user,
  status,
  name,
  email,
  action,
}: UserCardProps) {
  return (
    <UserCardContext.Provider value={{ user }}>
      <div className="w-full h-[250px] bg-card-primary rounded-md p-4">
        {status}
        <div className="mt-1 flex flex-col items-center justify-center ">
          <Image src={UserIcon} width={60} height={60} alt="user-image" />
          {name}
          {email}
          {action}
        </div>
      </div>
    </UserCardContext.Provider>
  );
}
