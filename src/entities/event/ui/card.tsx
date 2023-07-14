import React from 'react';

type EventCardProps = {
    title: string;
    id: number;
    date: Date;
    description: string | null;
};

const EventCard = ({}: EventCardProps) => {
    return <div className="card__wrapper"></div>;
};

export default EventCard;
