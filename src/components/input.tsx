import React, { forwardRef } from "react";
import styles from "./input.module.scss";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label = "TXT_LBL", id, error, ...rest }, ref) => {
    return (
      <div className={styles.inputGroup}>
        <label
          htmlFor={id}
          className={styles.label}
        >
          {label}
        </label>
        <input
          id={id}
          className={styles.input}
          ref={ref}
          {...rest}
        />
        {error && <p className={styles.errorMessageBubble}>{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
