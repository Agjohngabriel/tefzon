export default function Button(props: {
  color: string;
  bgcolor: string;
  title: string;
  opacity: string;
  width: string;
}) {
  return (
    <button
      type="submit"
      className={`${props.color} ${props.bgcolor} font-montserrat rounded p-3.5 text-xs shadow ${props.opacity} ${props.width}`}
    >
      {props.title}
    </button>
  );
}
