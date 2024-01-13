"use client";

import { useFetchUser } from "@/app/hooks/users/useFetchUser";
import React from "react";
import UserCard from "./UserCard";
import UserCardTitle from "./ component/ UserCardTitle";
import UserCardEmail from "./ component/UserCardEmail";
import UserCardStatus from "./ component/UserCardStatus";
import UserCardButton from "./ component/UserCardButton";
import { useSearchParams } from "next/navigation";
import Loading from "../PostCard/Loading";

export default function UserCardList() {
  const searchParamas = useSearchParams();
  const nameQueryParamas = searchParamas.get("name") || undefined;
  const { data, isLoading } = useFetchUser(nameQueryParamas);

  if (isLoading) return <Loading mssg="User" />;
  return (
    <>
      {data?.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          name={<UserCardTitle />}
          email={<UserCardEmail />}
          status={<UserCardStatus />}
          action={<UserCardButton />}
        />
      ))}
    </>
  );
}
