import React, { forwardRef } from "react";
import styles from "./button.module.scss";
import { HashLoader } from "react-spinners";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, ...rest }, ref) => {
    return (
      <button
        className={styles.button}
        ref={ref}
        {...rest}
      >
        {children}
        {disabled && (
          <HashLoader
            size={15}
            color="#fff"
          />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
