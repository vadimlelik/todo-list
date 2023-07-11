import { prisma } from "@/server/db";

export default function Blog({ data }) {
  console.log(data);

  return <div>Blog</div>;
}

export const getServerSideProps = async () => {
  // так не стоит делать
  //   const response = await fetch("http://localhost:3000/api/hello");
  //   const data = await response.json();

  const user = await prisma.user.findMany();

  return {
    props: {
      data: user,
    },
  };
};
