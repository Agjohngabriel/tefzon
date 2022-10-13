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
      className={`${props.color} ${props.bgcolor} font-montserrat rounded p-3.5 text-xs shadow  relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group ${props.opacity} ${props.width}`}
    >
      {/* purple box */}
      <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
      <span className="w-full transition-colors duration-300 ease-in-out group-hover:text-white z-10">
        {props.title}
      </span>
    </button>
  );
}
