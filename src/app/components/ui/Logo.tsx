import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: number;
  textSize?: string;
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = 40, textSize = "text-3xl", showText = true, className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-x-1.5 font-bold ${className}`}>
      <Image
        src="/freshcartlogo.svg"
        alt="CliqCart Logo"
        width={size}
        height={size}
        className="inline-block mr-2"
      />
      {showText && (
        <Link href="/" className={`${textSize} font-bold`}>
          Fresh<span className="text-[#16A34A]">cart</span>
        </Link>
      )}
    </div>
  );
};

export default Logo;
