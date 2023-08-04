import { trpc } from '@/shared/api';
import React from 'react';

type ButtonEventProps = {
    eventId: number;
    onSuccess?: () => void;
};

const ButtonEvent = ({ eventId, onSuccess }: ButtonEventProps) => {
    const { mutate } = trpc.event.join.useMutation({ onSuccess });

    const handleClick = () => {
        mutate({ id: eventId });
    };

    return <button onClick={handleClick}>Присоедениться</button>;
};

export default ButtonEvent;
