export default function Button(props: {
  color: string;
  bgcolor: string;
  title: string;
  opacity: string;
  width: string;
  Onclick: VoidFunction;
}) {
  return (
    <button
      onClick={props.Onclick}
      type="submit"
      className={`${props.color} ${props.bgcolor} font-montserrat rounded p-3.5 text-xs shadow ${props.opacity} ${props.width}`}
    >
      {props.title}
    </button>
  );
}
