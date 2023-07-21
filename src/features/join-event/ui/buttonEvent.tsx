import { trpc } from "@/shared/api";
import React from "react";

type ButtonEventProps = {
  eventId: number;
};

const ButtonEvent = ({ eventId }: ButtonEventProps) => {
  const { mutate } = trpc.event.join.useMutation();

  const handleClick = () => {
    mutate({ id: eventId });
  };

  return <button onClick={handleClick}>Присоедениться</button>;
};

export default ButtonEvent;
