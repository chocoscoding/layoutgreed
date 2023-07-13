import { MouseEventHandler } from "react";
interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: React.FC<ButtonProps>;
export { ButtonProps, Button };
