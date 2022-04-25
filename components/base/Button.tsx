export default function Button(props: {
  color: string;
  bgcolor: string;
  title: string;
}) {
  return (
    <button className={`${props.color} ${props.bgcolor} rounded p-2 text-xs`}>
      {props.title}
    </button>
  );
}
