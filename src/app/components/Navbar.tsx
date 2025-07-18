"use client";
import Link from "next/link";
// import Image from "next/image";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="w-full md:px-[56px] md:pt-[36px] md:pb-[24px]">
      <div className="flex items-center justify-between p-4 text-[#444444]">
        <div className="hidden  md:flex items-center gap-x-1.5 text-lg font-bold">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-x-[40px]">
            <li>
              <Link href="#why-cliqcart" className="hover:underline">
                Why cliqcart
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="hover:underline">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Button>Join waitlist</Button>
            </li>
          </ul>
        </div>

        {/*Mobile NavLinks */}
        <div className="relative w-full md:hidden">
          <div className="w-full flex items-center justify-between">
            <div>
              <Logo size={20} textSize="xl" />
            </div>
            <div className="">
              <Button onClick={handleClick}>{isOpen ? <X /> : <Menu />}</Button>
            </div>
          </div>

          {isOpen && (
            <div className="absolute right-1 mt-2 py-[20px] bg-[#16A34A] text-white z-30">
              <ul className="w-full flex flex-col gap-y-[20px] divide-y-1 divide-white items-center justify-center">
                <li>
                  <Link href="#why-cliqcart" className="hover:underline">
                    Why cliqcart
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:underline">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Button>Join waitlist</Button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
