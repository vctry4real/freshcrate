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
            <li className=" hover:motion-safe:animate-bounce hover:text-[#16A34A]">
              <Link href="#why-cliqcart" className="hover:no-underline">
                Why cliqcart
              </Link>
            </li>
            <li className="hover:motion-safe:animate-bounce hover:text-[#16A34A]">
              <Link href="#how-it-works" className="hover:no-underline">
                How it works
              </Link>
            </li>
            <li className="hover:motion-safe:animate-bounce hover:text-[#16A34A]">
              <Link href="#faq" className="hover:no-underline">
                FAQ
              </Link>
            </li>
            <li className="hover:motion-safe:animate-bounce">
              <Button className="hover:animate-pulse">
                <a
                  href="https://forms.gle/s5PYPboEDxvNj84X7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Early Access
                </a>
              </Button>
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
            <div className="absolute w-full right-1 mt-2 py-[20px] bg-[#16A34A] rounded-[20px] opacity-95  text-white z-30">
              <ul className="w-full flex flex-col gap-y-[20px] divide-y-1 px-[20px] divide-white items-start justify-center">
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
                  <Button>
                    <a
                      href="https://forms.gle/s5PYPboEDxvNj84X7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Early Access
                    </a>
                  </Button>
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
