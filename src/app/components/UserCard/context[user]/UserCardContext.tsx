"use client";

import { User } from "@/app/types/types";
import { createContext, useContext } from "react";

interface UserContext {
  user: User;
}

const UserCardContext = createContext<UserContext | null>(null);

export function useUserContext() {
  const context = useContext(UserCardContext);
  if (!context) {
    throw new Error("Post context must rendered as a child of provider");
  }

  return context;
}

export default UserCardContext;
