import React from "react";
import { useForm } from "react-hook-form";
import { CreateEventSchema } from "@/shared/api";
import { z } from "zod";

export type FormEventValues = z.infer<typeof CreateEventSchema>;

type CreateFormProps = {
  onSubmit: (data: FormEventValues) => void;
};

export const CreateForm = ({ onSubmit }: CreateFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormEventValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="placeholder"
        id="title"
        {...register("title")}
      />
      <textarea id="description" {...register("description")} />
      <input type="date" id="data" {...register("date")} />
      <button type="submit">Создать</button>
    </form>
  );
};
