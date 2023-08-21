import React from "react";

interface InputProps {
    value?: any;
    onChange?: any;
    
    disabled?: boolean;
    form?: string;
    name?: string;
    placeholder?: string;
    inputClass?: string;
    required?: boolean;
    type?: "search" | "text" | "none" | "tel" | "url" | "email" | "number" | "decimal" | "hidden";
    maxlength?: number;
    minlength?: number;
    handleOnInput?: any;
    handleFocus?: any;
    handleKeydown?: any;
    handleKeyup?: any;
    isError?: boolean;
    errorMessage?: string;
    helperText?: string;
    id?: string;
}

const Input = ({
  disabled,
  inputClass,
  maxlength,
  minlength,
  type,
  value,
  placeholder,
  handleOnInput,
  handleFocus,
  handleKeydown,
  handleKeyup,
  isError,
  helperText,
  errorMessage,
  form,
  name,
  required,
  onChange,
  id,
}: InputProps) => {
    const errorClass = isError && errorMessage ? "field-error" : "";
    return (
      <div className="input-container">
        <div className="input-position-relative">
            <input
                id={id}
                onChange={(e) => onChange(e)}
                disabled={disabled}
                className={[inputClass, errorClass].join(' ')}
                maxLength={maxlength}
                minLength={minlength}
                type={type}
                value={value}
                placeholder={placeholder}
                onInput={handleOnInput}
                onFocus={handleFocus}
                onKeyDown={handleKeydown}
                form={form}
                name={name}
                required={required}
                onKeyUp={handleKeyup}
            />
        </div>
        {
          helperText && !isError 
          ? <span
            className={`input-text-helper ${disabled ? "input-text-helper-disabled" : ''}`}>
            {helperText}
          </span>
          : null
        }
        {
          isError && errorMessage
          ? <div className="error-message-container">
            <span className="input-text-error">{errorMessage}</span>
          </div>
          : null
        }
      </div>
    )
};

export default Input;