import { FC } from "react";
import { parseISO } from "date-fns";

const Date: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <div>{date.toDateString()}</div>;
};

interface Props {
  dateString: string;
}

export default Date;
