"use client";

import { useFetchUser } from "@/app/hooks/users/useFetchUser";
import React from "react";
import UserCard from "./UserCard";
import UserCardTitle from "./ component/ UserCardTitle";
import UserCardEmail from "./ component/UserCardEmail";
import UserCardStatus from "./ component/UserCardStatus";
import UserCardButton from "./ component/UserCardButton";
import { userInfo } from "os";
import Loading from "../PostCard/Loading";

export default function UserCardList() {
  const { data, isLoading } = useFetchUser();

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
