import { RouterOutput } from "@/shared/api";

type EventDetailProps = NonNullable<RouterOutput["event"]["findUnique"]>;

const Detail = ({
  date,
  description,
  title,
  participations,
}: EventDetailProps) => {
  return (
    <div>
      <div>
        <div>Title :{title}</div>
        <div>Description : {description}</div>
        <div>Data : {date.toLocaleDateString()}</div>

        <div>
          participations:
          {participations.map(({ user }) => user.name).join(", ")}
        </div>
      </div>
    </div>
  );
};

export default Detail;
