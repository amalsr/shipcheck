import type { MouseEventHandler } from "react";
import "./ButtonStyles.css";

type ButtonProps = {
    handleClick: MouseEventHandler<HTMLButtonElement>;
    isPrimary?: boolean;
    customStyle?: string;
    label: string;
}

const Button = (props: ButtonProps) => {
    const {
       handleClick,
       isPrimary = true,
       label,
       customStyle,
    } = props;
    return (
        <button onClick={handleClick} className={`${isPrimary ? "primaryButton" : "secondaryButton"} ${customStyle}`}>
            {label}
        </button>
    )
}

export default Button;