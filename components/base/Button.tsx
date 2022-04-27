export default function Button(props: {
  color: string;
  bgcolor: string;
  title: string;
}) {
  return (
    <button
      className={`${props.color} ${props.bgcolor} font-montserrat rounded p-3.5 text-xs shadow`}
    >
      {props.title}
    </button>
  );
}
