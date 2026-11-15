
import {useRef, type Ref} from "react";
import "./inputStyles.css";
type InputProps = {
    label: string;
    value?: string | number;
    isControlled?: boolean;
    customStyle?: string;
    id?: string;
    key?: string;
    parentRef?: Ref<HTMLInputElement>;
    type?: "text" | "number" | "password";
    isPassword?: boolean;
};
const Input = (props: InputProps) => {
    const {
        label,
        value, 
        isControlled = true,
        parentRef,
        customStyle,
        id,
        key,
        type,
    } = props;
    const inRef = useRef<HTMLInputElement>(null);
    return (
        <div className="inputWrapper">
          <div className="inputLabel">
            {label}
          </div>
          <div className="inputElement">
            <input
               id={id ?? label}
               key={key ?? label}
               className={customStyle ?? `inputStyle`}
               {
                ...(isControlled ? {
                    value: value
                } : {})
               }
               ref={parentRef ?? inRef}
               type={type ?? "text"}
            />
          </div>
        </div>
    )
}

export default Input;