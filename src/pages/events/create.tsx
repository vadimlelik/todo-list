import { CreateForm, FormEventValues } from '@/features/create-event';
import { trpc } from '@/shared/api';
import { useRouter } from 'next/router';
import React from 'react';

const Create = () => {
    const { push } = useRouter();
    const { mutate } = trpc.event.create.useMutation({
        onSuccess: (data) => {
            push(`/blog/${data.id}`);
        },
    });

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
