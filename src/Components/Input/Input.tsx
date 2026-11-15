
import {useRef, type Ref} from "react";
import "./inputStyles.css";
type InputProps = {
    label: string;
    value?: string | number;
    isControlled?: boolean;
    customStyle?: string;
    id?: string;
    parentRef?: Ref<HTMLInputElement>;
    type?: "text" | "number" | "password";
    placeholder?: string;
    autoComplete?: string;
};
const Input = (props: InputProps) => {
    const {
        label,
        value,
        isControlled = true,
        parentRef,
        customStyle,
        id,
        type,
        placeholder,
        autoComplete,
    } = props;
    const inRef = useRef<HTMLInputElement>(null);
    const inputId = id ?? label;
    return (
        <div className="inputWrapper">
          {/* htmlFor links the label to the input: clicking the label focuses it */}
          <label className="inputLabel" htmlFor={inputId}>
            {label}
          </label>
          <input
             id={inputId}
             name={inputId}
             className={customStyle ?? `inputStyle`}
             {
              ...(isControlled ? {
                  value: value
              } : {})
             }
             ref={parentRef ?? inRef}
             type={type ?? "text"}
             placeholder={placeholder}
             autoComplete={autoComplete}
          />
        </div>
    )
}

export default Input;
