import { PropsWithChildren, ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    
      <button
        {...props}
        className="bg-[#16A34A] text-white font-medium text-[16px] p-[12px] md:px-6 md:py-3 rounded-[10px] hover:bg-[#011F15] "
        type="button"
      >
        {children}
      </button>
    
  );
};

export default Button;
