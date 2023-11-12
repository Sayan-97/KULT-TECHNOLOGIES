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
      className={`font-medium
        ${props.variant === "secondary" ? "button-secondary" : "button-primary"}
      `}
    >
      <div>{props.content}</div>
    </button>
  );
}
