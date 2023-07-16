import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export const CreateForm = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
