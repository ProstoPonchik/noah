"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/pictures/header/logo.png";
import menu from "@/public/pictures/header/menu.svg";
import HeaderMenuListPoint from "./HeaderMenuListPoint";
import { headerMenuItems } from "./HeaderMenuListItems";
import { usePathname } from "next/navigation";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

export default function Header() {
  const path = usePathname();
  const [menuState, setMenuState] = useState(false);
  return (
    <header className="relative flex py-[23px] tablet:px-[39px] mobile:px-[8px] laptop:max-w-[970px] justify-between items-center desktopxs:max-w-[1350px] tablet:max-w-[720px] mobile:max-w-[355px] rounded-[20px] mx-auto mt-[21px] shadow-header h-[76px] bg-white z-[80]">
      <Image
        src={logo.src}
        height={28.3}
        width={120}
        alt="noah logo"
        className="laptop:flex tablet:hidden mobile:hidden m-2"
      />
      {menuState && <HeaderMenu closeMenu={setMenuState} />}

      <div className="flex laptop:hidden target:flex">
        <Image
          src={menu.src}
          height={34}
          width={34}
          alt="menu-button"
          className="laptop:mr-[17px] mobile:mr-[10px]"
          onClick={() => setMenuState(true)}
        />
        <Image
          src={logo.src}
          height={28.3}
          width={120}
          alt="noah logo"
          className="table:hidden m-2"
        />
      </div>
      <ul className="laptop:flex font-inter mobile:hidden">
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
      <button className="tablet:flex mobile:hidden text-white text-base font-medium leading-7 bg-stone-950 py-[9.27px] px-[14.3px] rounded-[5px] gap-[8.43px] font-ttnorms">
        Забронировать консультацию
      </button>
    </header>
  );
}
