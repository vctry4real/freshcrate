import Logo from "./ui/Logo";
import Image from "next/image";
import GreenCard from "@/app/components/cards/GreenCard";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#F3FEF3] pz-[20px] md:px-[51px]  py-[57px]">
      <div className="flex flex-col gap-y-[34px] md:flex-row md:justify-between items-center ">
        {/* Company Info Coloumn */}
        <div className="flex flex-col items-start justify-start gap-y-[16px]  md:gap-y-[36px]">
          <Logo size={30} textSize="text-xl" showText={true} className="mb-2" />
          <p className="w-[351px] text-[24px]  text-[#2D3130] font-bold leading-[124%] md:w-[389px] md:text-[32px]">
            YOUR ONE STOP FOR ALL GROCERY ITEMS
          </p>
          <div className="flex items-center justify-center gap-x-4 ">
            <div className="relative w-[133px] md:w-[139px] h-[43px] ">
              <Image
                src="/appleStore.svg"
                alt="Download on the App Store"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[133px] md:w-[139px] h-[43px] ">
              <Image
                src="/googlePlay.svg"
                alt="Get it on Google Play"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Footer Links Column */}
        <div className="md:col-span-2">
          <GreenCard
            className="w-[351px] md:w-[826px] "
            topVariant="topAssetStyle2"
            bottomVariant="assetStyleBottom2"
            src="topAsset2.svg"
            src2="bottomAsset2.svg"
          >
            <div className="flex flex-col gap-y-[47px]  pt-[47px] pb-[41px] ">
              {/* Links */}
              <div className="grid grid-cols-1 gap-y-[30px] items-center  md:grid-cols-2  md:gap-x-[142px] text-[#FFFFFF] px-[49px] ">
                {/* Location links */}
                <div className=" w-full md:col-span-1 flex flex-col gap-y-[37px]">
                  <h3 className="flex items-center gap-x-1.5">
                    <span>
                      {" "}
                      <MapPin />{" "}
                    </span>{" "}
                    Location
                  </h3>
                  {/* location list */}
                  <div className="flex items-center gap-x-[66px]">
                    <div>
                      <ul className="flex flex-col gap-y-[19px] text-[12px]">
                        <li>Gwarinpa</li>
                        <li>Life Camp</li>
                        <li>Wuse</li>
                        <li>Jabi</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex flex-col gap-y-[19px] text-[12px]">
                        <li>Maitama</li>
                        <li>Jahi</li>
                        <li>Apo</li>
                        <li>Kubwa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="w-full flex items-center justify-between md:gap-x-[142px]">
                  {/* company Links */}
                  <div className="w-full flex flex-col gap-y-[37px]">
                    <h3>Company</h3>
                    <ul className="flex flex-col gap-y-[19px] text-[12px]">
                      <li className="">Privacy Policy</li>
                      <li>Terms of use</li>
                      <li>About us</li>
                      <li>FAQs</li>
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="w-full flex flex-col gap-y-[37px]">
                    <h3>Socials</h3>
                    <ul className="flex flex-col text-[12px] gap-y-[19px]">
                      <li>X</li>
                      <li>Instagram</li>
                      <li>LinkedIn</li>
                      <li>Facebook</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Call to action */}
              <div className="w-full flex justify-start pl-[49px] md:justify-end md:pr-[68px]">
                <h4 className="text-[#ffffff] text-[12px] ">
                  Get in touch at{" "}
                  <span className="text-[#16A34A]">hello@freshcart.live</span>
                </h4>
              </div>
            </div>
          </GreenCard>
        </div>
      </div>
    </div>
  );
};

export default Footer;
