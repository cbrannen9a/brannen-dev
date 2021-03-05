import { FC } from "react";
import { parseISO, format } from "date-fns";

const Date: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <div>date</div>;
};

interface Props {
  dateString: string;
}

export default Date;
