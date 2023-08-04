import EventCard from '@/entities/event/ui/card';
import { trpc } from '@/shared/api';
import ButtonEvent from '@/features/join-event/ui/buttonEvent';

export default function Blog() {
    const { data, refetch } = trpc.event.findMany.useQuery();

    return (
        <ul>
            {data?.map((event) => (
                <li key={event.id}>
                    <EventCard
                        {...event}
                        action={
                            !event.isJoined && (
                                <ButtonEvent onSuccess={refetch} eventId={event.id} />
                            )
                        }
                    />
                </li>
            ))}
        </ul>
    );
}

// export const getServerSideProps = async () => {
//   // так не стоит делать
//   //   const response = await fetch("http://localhost:3000/api/hello");
//   //   const data = await response.json();

//   const user = await prisma.user.findMany();

//   return {
//     props: {
//       data: user,
//     },
//   };
// };
