import React from "react";
import { useForm } from "react-hook-form";
import { CreateEventSchema } from "@/shared/api";
import { zodResolver } from "@hookform/resolvers/zod";
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
  } = useForm<FormEventValues>({
    resolver: zodResolver(CreateEventSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="placeholder"
          id="title"
          {...register("title")}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <textarea id="description" {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div>
        <input type="date" id="data" {...register("date")} />
        {errors.date && <p>{errors.date.message}</p>}
      </div>
      <button type="submit">Создать</button>
    </form>
  );
};
