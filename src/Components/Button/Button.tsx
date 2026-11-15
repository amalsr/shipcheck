import type { MouseEventHandler } from "react";
import "./ButtonStyles.css";

type ButtonProps = {
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    isPrimary?: boolean;
    customStyle?: string;
    label: string;
    type?: "button" | "submit";
}

const Button = (props: ButtonProps) => {
    const {
       handleClick,
       isPrimary = true,
       label,
       customStyle,
       type = "button",
    } = props;
    return (
        <button
            type={type}
            onClick={handleClick}
            className={`${isPrimary ? "primaryButton" : "secondaryButton"} ${customStyle ?? ""}`}
        >
            {label}
        </button>
    )
}

export default Button;
