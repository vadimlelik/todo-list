import EventCard from '@/entities/event/ui/card';
import { prisma } from '@/server/db';
import { trpc } from '@/shared/api';

export default function Blog() {
    const { data } = trpc.event.findMany.useQuery();

    return (
        <ul>
            {data?.map(({ title, id }) => (
                <li key={id}>
                    <EventCard />
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
