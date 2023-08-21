import React from "react";

interface CheckboxProps {
    value?: boolean;
    onChange?: any;
    onClick?: any;

    id?: string;
    children?: string;
    disabled?: boolean;
    form?: string;
    name?: string;

    type?: "circle" | "square";
    className?: string;
}
  

const Checkbox = ({
  id,
  children,
  value,
  onChange,
  onClick,
  disabled,
  form,
  name,
  type,
  className
}: CheckboxProps) => {
    const isDisabled = disabled ? "disabled" : "";

    return (
      <label className={`checkbox-input-container ${className}`}>
        <input
          id={id ? id : "checkbox"}
          type="checkbox"
          checked={value}
          onChange={onChange}
          onClick={onClick}
          form={form}
          name={name}
          disabled={disabled}
        />
        <span className={["checkmark", isDisabled, `type-${type}`, value ? 'checked' : 'unchecked'].join(' ')}>
          <div className="after">
            <img src="/icon-check.svg" alt="check" />
          </div>
        </span>

        {
          children 
          ? <div className="checkbox-text">
            {children}
          </div>
          : null
        }
      </label>
    )
};

export default Checkbox;
  