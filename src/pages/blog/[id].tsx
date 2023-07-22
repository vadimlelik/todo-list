import Detail from "@/entities/event/ui/detail";
import { trpc } from "@/shared/api";
import { useRouter } from "next/router";
import React from "react";

const Event = () => {
  const routes = useRouter();
  const { data, isLoading } = trpc.event.findUnique.useQuery({
    id: Number(routes.query.id),
  });

  if (isLoading) {
    return <h1>...Loading</h1>;
  }
  if (!data) {
    return <h1>...Loading</h1>;
  }
  return <Detail {...data} />;
};

export default Event;
