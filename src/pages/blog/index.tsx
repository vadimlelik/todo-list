import { prisma } from '@/server/db';
import { trpc } from '@/shared/api';

export default function Blog() {
    const { data } = trpc.hello.useQuery({ name: 'name' });

    return <div>{data?.greeting}</div>;
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
