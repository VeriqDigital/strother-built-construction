import Link from "next/link";
type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "dark" | "light";
  className?: string;
};
export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: Props) {
  const classes = `button button-${variant} ${className}`;
  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
