import style from "./styles.module.scss";

interface IButtonProps {
  isTransparent?: boolean;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?(): void;
  isLoading?: boolean;
}

export function Button({
  isTransparent,
  type,
  children,
  onClick,
  isLoading,
}: IButtonProps) {
  return (
    <button
      type={`${!type ? "button" : type}`}
      className={`${style.button} ${isTransparent && style.rounded}`}
      onClick={onClick}
    >
      {isLoading ? <ButtonSpinner /> : children}
    </button>
  );
}

export function ButtonSpinner() {
  return <div className="spinner"></div>;
}
