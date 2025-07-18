"use client";

import Image from "next/image";
import clsx from "clsx";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
  subClassName?: string;
  variant?: "primary" | "secondary";
}

export const Card = ({
  title,
  description,
  imageUrl,
  className,
  subClassName,
  variant = "primary",
}: CardProps) => {
  const baseStyles =
    "rounded-lg px-[24px] py-[38px] shadow-md transition-all duration-300 md:px-[28px] md:py-[21px]";
  const variantStyles: Record<"primary" | "secondary", string> = {
    primary: "flex flex-col gap-y-[40px]",
    secondary:
      "w-full grid grid-cols-1 md:grid-cols-4 gap-y-[16px] gap-x-[2px]",
  };

  return (
    <div className={clsx(baseStyles, variantStyles[variant], className)}>
      <div
        className={`${subClassName} w-[80px] h-[80px]  flex items-center justify-center rounded-[10px] md:w-[111px] md:h-[111px] `}
      >
        <div className="relative w-[30px] h-[30px] p-[24px] ">
          <Image src={imageUrl} alt={title} fill className="object-cover " />
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-start gap-y-[12px] md:gap-y-[24px]">
        <h3 className="text-[18px] font-bold text-gray-800 md:text-xl">
          {title}
        </h3>
        <p className="text-gray-600 text-[12px]">{description}</p>
      </div>
    </div>
  );
};
