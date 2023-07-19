import { CreateForm, FormEventValues } from "@/features/create-event";
import { trpc } from "@/shared/api";
import React from "react";

const Create = () => {
  const { mutate } = trpc.event.create.useMutation();
  const handleSubmit = (data: FormEventValues) => {
    mutate(data);
  };
  return (
    <div>
      <CreateForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Create;
