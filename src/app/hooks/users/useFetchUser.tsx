import { User } from "@/app/types/types";
import apiInstance from "@/app/utils/axios";
import { useQuery } from "@tanstack/react-query";

async function fetchUserById(user_id: string) {
  const response = await apiInstance.get(`/users/${user_id}`);
  return response.data;
}

async function fetchUser(page?: number, name?: string) {
  const response = await apiInstance.get(`/users`, {
    params: {
      per_page: 30,
      page: page,
      name: name,
    },
  });
  return response.data;
}

export function useFetchUser(page?: number, name?: string) {
  return useQuery<User[]>({
    queryKey: ["users", { page, name }],
    queryFn: () => fetchUser(page, name),
  });
}

export function useFetchUserById(user_id: string) {
  return useQuery<User>({
    queryKey: ["user", { user_id }],
    queryFn: () => fetchUserById(user_id),
  });
}
