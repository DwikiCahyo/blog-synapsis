import apiInstance from "@/app/utils/axios";
import { useMutation } from "@tanstack/react-query";

async function deletUser(user_id: string) {
  const response = await apiInstance.delete(`/users/${user_id}`);
  return response.data;
}

export function useDeleteUserById() {
  return useMutation({
    mutationFn: (user_id: string) => deletUser(user_id),
  });
}
