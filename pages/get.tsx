import { useRouter } from "next/router";

const Callback = () => {
  const { query } = useRouter();
  return <div>{query.code}</div>;
};

export default Callback;
