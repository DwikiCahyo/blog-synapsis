import { User } from "@/app/types/types";
import apiInstance from "@/app/utils/axios";
import { useQuery } from "@tanstack/react-query";

async function fetchUserById(user_id: string) {
  const response = await apiInstance.get(`/users/${user_id}`);
  return response.data;
}

async function fetchUser(name?: string) {
  const response = await apiInstance.get(`/users`, {
    params: {
      per_page: 30,
      name: name,
    },
  });
  return response.data;
}

export function useFetchUser(name?: string) {
  return useQuery<User[]>({
    queryKey: ["users", { name }],
    queryFn: () => fetchUser(name),
  });
}

export function useFetchUserById(user_id: string) {
  return useQuery<User>({
    queryKey: ["user", { user_id }],
    queryFn: () => fetchUserById(user_id),
  });
}
