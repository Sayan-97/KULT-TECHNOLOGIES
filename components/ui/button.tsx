type ButtonProps = {
  content: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "submit" | "button" | "reset";
  className?: string;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      className={`px-8  rounded-lg font-medium
        ${props.variant === "secondary" ? "py-[9px] secondary-variant" : "bg-primary-gradient py-2.5"}
      `}
    >
      {props.content}
    </button>
  );
}
