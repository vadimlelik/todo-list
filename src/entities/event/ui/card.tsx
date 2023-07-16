import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  title: string;
  id: number;
  date: Date;
  description: string | null;
};

const EventCard = ({ title, description, date, id }: EventCardProps) => {
  console.log(date);

  return (
    <div className={style.Card}>
      <div className={style.Title}>{title}</div>
      <div className={style.Description}>{description}</div>
      <div>{date.toDateString()}</div>
      <div className={style.ButtonGroup}>
        <button>Delete</button>
        <Link href={`/blog/${id}`}>Подробнее</Link>
      </div>
    </div>
  );
};

export default EventCard;
