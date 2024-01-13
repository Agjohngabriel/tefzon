import { format, parseISO } from "date-fns";

const FormattedDate = ({ date }: any) => {
  const formatDate = (date: any) => {
    const parsedDate = parseISO(date);
    return format(parsedDate, "MMM d yyyy | h:mmaaa");
  };

  return <span>{formatDate(date)}</span>;
};

export default FormattedDate;
