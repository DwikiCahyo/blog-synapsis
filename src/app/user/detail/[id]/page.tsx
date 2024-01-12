import FormUserUpdate from "@/app/components/FormUser/FormUserUpdate";
import React from "react";

export default function DetailUserPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="w-full sm:w-3/4 md:w-1/2  bg-card-primary rounded-md p-4 mx-auto">
      <FormUserUpdate id={id} />
    </div>
  );
}
