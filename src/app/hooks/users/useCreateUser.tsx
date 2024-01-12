import apiInstance from "@/app/utils/axios";
import { useMutation } from "@tanstack/react-query";

async function createUser(body: {
  name: string;
  email: string;
  gender: string;
  status: string;
}) {
  const response = await apiInstance.post("users", body);
  return response;
}

export function useCreateUser() {
  return useMutation({
    mutationFn: (body: {
      name: string;
      email: string;
      gender: string;
      status: string;
    }) => createUser(body),
  });
}
