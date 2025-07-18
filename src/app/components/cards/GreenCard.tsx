import Image from "next/image";
import clsx from "clsx";

interface CardProps {
  className?: string;
  topVariant?:
    | "topAssetStyle"
    | "assetStyleBottom"
    | "topAssetStyle2"
    | "assetStyleBottom2";
  bottomVariant?:
    | "topAssetStyle"
    | "assetStyleBottom"
    | "topAssetStyle2"
    | "assetStyleBottom2";
  children: React.ReactNode;
  src?: string;
  src2?: string;
}

const GreenCard = ({
  children,
  topVariant = "topAssetStyle",
  bottomVariant = "assetStyleBottom",
  className,
  src = "/topAsset.svg",
  src2 = "/bottomAsset.svg",
}: CardProps) => {
  const baseStyles = "relative bg-[#011F15] rounded-[20px]  overflow-hidden ";

  const variantStyles: Record<
    | "topAssetStyle"
    | "assetStyleBottom"
    | "topAssetStyle2"
    | "assetStyleBottom2",
    string
  > = {
    topAssetStyle:
      "absolute w-full h-[242px] top-[-10px] left-[49%] -translate-x-[50%]",
    assetStyleBottom:
      "absolute w-full h-[242px] bottom-[-10px] left-[133%] -translate-x-[50%]",
    topAssetStyle2:
      "absolute w-full h-[242px] top-[3px] right-[-107%] md:right-[-123%] md:top-[-10px] -translate-x-[50%]",
    assetStyleBottom2:
      "absolute w-full h-[242px] bottom-[-31px] left-[50%] md:bottom-[1px] md:left-[50%] -translate-x-[50%]",
  };
  return (
    <section className={clsx(baseStyles, className)}>
      {/* Top asset */}
      <div className={`${variantStyles[topVariant]}`}>
        <div className="relative w-[209px] h-[209px] md:w-[242px] md:h-[242px] px-[29px] ">
          <Image
            src={src}
            alt="background asset"
            className="w-full h-full object-cover "
            fill
          />
        </div>
      </div>

      {/* Bottom asset */}
      <div className={`${variantStyles[bottomVariant]}`}>
        <div className="relative w-[209px] h-[209px] md:w-[242px] md:h-[242px] px-[29px] ">
          <Image
            src={src2}
            alt="background asset"
            className="w-full h-full object-cover "
            fill
          />
        </div>
      </div>

      {children}
    </section>
  );
};
export default GreenCard;
