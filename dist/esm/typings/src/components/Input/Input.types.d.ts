import { ChangeEventHandler } from "react";
interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: React.FC<InputProps>;
export { InputProps, Input };
