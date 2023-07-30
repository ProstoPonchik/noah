"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/pictures/header/logo.png";
import HeaderMenuListPoint from "./HeaderMenuListPoint";
import { headerMenuItems } from "./HeaderMenuListItems";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <header className="relative flex py-[23px] px-[39px] justify-between items-center max-w-[1350px] rounded-[20px] mx-auto mt-[21px] shadow-header h-[76px] bg-white z-[1]">
      <Image src={logo.src} height={28.3} width={120} alt="noah logo" />
      <ul className="flex font-inter">
        {headerMenuItems.map(
          (menuItem: { page: string; displayValue: string }, index: number) => {
            return (
              <Link href={menuItem.page} key={index}>
                <li className="flex items-center text-[14px] font-bold leading-5 cursor-pointer">
                  <p
                    className={
                      path === menuItem.page
                        ? "text-[#19B6B1]"
                        : "text-[#0E0F0F]"
                    }
                  >
                    {menuItem.displayValue}
                  </p>
                  {index !== headerMenuItems.length - 1 && (
                    <HeaderMenuListPoint />
                  )}
                </li>
              </Link>
            );
          }
        )}
      </ul>
      <button className="text-white text-base font-medium leading-7 bg-stone-950 py-[9.27px] px-[14.3px] rounded-[5px] gap-[8.43px] font-ttnorms">
        Забронировать консультацию
      </button>
    </header>
  );
}
