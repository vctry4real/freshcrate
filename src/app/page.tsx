import Image from "next/image";
import { Card } from "@/app/components/cards/Card";
import {
  howToContentData,
  whyUsContentData,
} from "@/app/components/dummyData/ContentData";
import { Accordion } from "./components/ui/Accordion";
import GreenCard from "@/app/components/cards/GreenCard";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className=" py-[80px]">
      <main className=" w-ful flex flex-col items-center gap-y-[58px] md:gap-y-[110px] overflow-hidden">
        <section className="w-full flex flex-col items-center gap-y-[40px] px-[29px]">
          <div className="w-full flex flex-col gap-y-[28px]">
            <div className="flex flex-col items-center gap-y-[16px]">
              <h2 className="w-[347px] font-bold t text-[32px] md:text-[80px] leading-[100%]  text-[#000000] text-center md:w-[1023px]">
                A Grocery Shopping App You&apos;ll Love
              </h2>
              <p className="w-[347px] font-medium text-[16px] md:text-[32px] leading-[100%] tracking-[-1.5%] text-[#444444] text-center md:w-[649px]">
                scan your grocery list, fill your cart and get your items
                delivered to your door step.
              </p>
            </div>
            <div className="w-full">
              <div className="relative w-full h-[265px] md:w-full md:h-[800px] mt-[40px] ">
                <Image
                  src="/hero.svg"
                  alt=" cliqcart hero"
                  fill
                  className="object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </section>
        {/* How it works */}
        <section id="how-it-works" className="px-[29px]">
          <div className="">
            <h2 className="font-bold text-[24px] md:text-[60px] leading-[100%] text-[#000000] text-center">
              Stress-free Shopping Experience
            </h2>
            <div className="flex flex-col md:flex-row  items-center gap-y-[16px] mt-[24px] md:gap-y-[40px] md:gap-x-[28px] md:mt-[40px]">
              {howToContentData.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.image}
                  subClassName="bg-[#F6FEF6] rounded-3xl"
                  className="md:mb-[40px] bg-[#F2F4F7]"
                  variant="primary"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section
          id="why-cliqcart"
          className="w-full bg-[#E1FCE266] px-[29px] pt-[64px] pb-[294px] "
        >
          <div className=" flex flex-col gap-y-[76px]">
            <div className="flex flex-col items-center gap-[16px] ">
              <h2 className="w-[390px]  font-bold text-[24px] leading-[100%] text-[#16A34A] text-center md:w-[767px]">
                Why Choose us
              </h2>
              <p className="w-[349px] text-[24px] leading-[100%] text-center font-bold md:w-[767px] md:text-[40px]">
                Freshcart isn&apos;t just another grocery app. It&apos;s a
                smarter way to shop.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-y-[16px] gap-x-[35px] md:grid-cols-2 ">
              <div className="w-[349px] h-[484px] order-2 relative rounded-[20px] md:w-[627px] md:h-full md:order-1 ">
                <video
                  src="/freshcart.mp4"
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-[349px] h-[484px] absolute object-fit md:w-[627px] md:h-full"
                />
              </div>
              <div className="order-1 h-full flex flex-col items-center justify-between gap-y-[16px] gap-x-[28px] md:order-2 ">
                {whyUsContentData.map((item, index) => (
                  <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.image}
                    subClassName={item.subClassName}
                    className={item.clasName}
                    variant="secondary"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commonly Asked Question */}

        <section className="px-[29px]">
          {/* Desktop Screen */}
          <GreenCard
            className="hidden md:block w-[371px] h-[614px]  -mt-[280px]  md:h-full px-[29px] md:w-[1299px] "
            topVariant="topAssetStyle"
            bottomVariant="assetStyleBottom"
            src="topAsset.svg"
            src2="bottomAsset.svg"
          >
            <section
              id="faq"
              className="flex flex-col gap-y-[58px]  rounded-[20px] pt-[73px] pb-[94px] "
            >
              <div className="flex flex-col items-center gap-[9px] ">
                <h2 className="w-[288px] text-[24px]  leading-[100%] text-[#FFFFFF] text-center font-bold md:text-[60px] md:w-[847px]">
                  Commonly Asked Questions.
                </h2>
                <p className="w-[288px] font-medium text-[16px] leading-[100%] text-[#16A34A] text-center md:w-[767px] md:text-[24px]">
                  We have answers to your questions
                </p>
              </div>
              <Accordion />
            </section>
          </GreenCard>

          {/* For Mobile */}
          <GreenCard
            className="block md:hidden w-[371px] h-[614px]  -mt-[280px]  md:h-full px-[29px] md:w-[1299px] "
            topVariant="topAssetStyle2"
            bottomVariant="assetStyleBottom2"
            src="topAsset2.svg"
            src2="bottomAsset2.svg"
          >
            <section
              id="faq"
              className="flex flex-col gap-y-[58px]  rounded-[20px] pt-[73px] pb-[94px] "
            >
              <div className="flex flex-col items-center gap-[9px] ">
                <h2 className="w-[288px] text-[24px]  leading-[100%] text-[#FFFFFF] text-center font-bold md:text-[60px] md:w-[847px]">
                  Commonly Asked Questions.
                </h2>
                <p className="w-[288px] font-medium text-[16px] leading-[100%] text-[#16A34A] text-center md:w-[767px] md:text-[24px]">
                  We have answers to your questions
                </p>
              </div>
              <Accordion />
            </section>
          </GreenCard>
        </section>

        {/* Call To Action */}
        <section className="px-[29px]">
          <div className="flex flex-col items-center gap-y-[21px]">
            <h2 className="w-[319px] font-bold text-[18px] leading-[100%] text-[#000000] text-center md:text-[60px] md:w-[911px]">
              Tired of scrolling endlessly through online grocery stores?
            </h2>
            <Button>Join Waitlist</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
