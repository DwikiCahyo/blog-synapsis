import apiInstance from "@/app/utils/axios";
import { useMutation } from "@tanstack/react-query";

async function updateUser(
  id: string,
  body: {
    name?: string;
    email?: string;
    gender?: string;
    status?: string;
  }
) {
  const response = await apiInstance.patch(`users/${id}`, body);
  return response;
}

export function useUpdateUser(id: string) {
  return useMutation({
    mutationFn: (body: {
      name?: string;
      email?: string;
      gender?: string;
      status?: string;
    }) => updateUser(id, body),
  });
}
