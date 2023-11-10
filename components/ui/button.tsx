type ButtonProps = {
  content: React.ReactNode;
  type?: "submit" | "button" | "reset";
  className?: string;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      className={`px-8 py-2.5 bg-primary-gradient rounded-lg font-medium`}
    >
      {props.content}
    </button>
  );
}
