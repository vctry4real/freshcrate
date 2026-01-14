import { PropsWithChildren, ButtonHTMLAttributes, forwardRef } from "react";
// import { useRef } from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        className="bg-[#16A34A] text-white font-medium text-[16px] p-[12px] md:px-6 md:py-3 rounded-[10px] hover:bg-[#011F15] "
        type="button"
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
