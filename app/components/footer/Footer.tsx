import Image from "next/image";
import Link from "next/link";
import logo from "@/public/pictures/footer/logo.png";
import linkedin from "@/public/pictures/footer/linkedin-icon.svg";
export default function Footer() {
  return (
    <footer className="mx-auto flex justify-between max-w-[1440px] tablet:my-[100px] dexktopxs:px-[90px] laptop:px-[10px] mobile:my-[60px] mobile:px-[18px] tablet:px-[30px] flex-wrap">
      <div className="flex flex-col text-zinc-400 text-base font-normal leading-normal dekstopxs:max-w-[290px] laptop:max-w-[240px] tablet:max-w-[165px]">
        {" "}
        <Image
          src={logo.src}
          height={28.3}
          width={120}
          alt="noah logo"
          className="mb-[18px]"
        />
        <span className="mb-[26px]">
          Установите крепкую связь с бизнес-сообществом
        </span>
        <span>© 2023 Noah</span>
      </div>
      <div className="desktopxs:max-w-[935px] flex items-start text-black text-sm font-bold leading-tight flex-wrap tablet:mt-0 mobile:mt-[30px]">
        <ul className="grid grid-cols-2 desktopxs:gap-x-[32px] laptop:gap-x-[20px] gap-y-[22px]">
          <li className="desktopxs:w-[291px] laptop:w-[140px]">
            <Link href="/">Главная</Link>
          </li>
          <li className="desktopxs:w-[291px] laptop:w-[140px]">
            <Link href="/">Распаковка бренда</Link>
          </li>
          <li className="desktopxs:w-[291px] laptop:w-[140px]">
            <Link href="/">Лидогенерация</Link>
          </li>
          <li className="desktopxs:w-[291px] laptop:w-[140px]">
            <Link href="/">Работа с репутацией</Link>
          </li>
          <li className="desktopxs:w-[291px] laptop:w-[140px]">
            <Link href="/about">О нас</Link>
          </li>
          <li className="desktopxs:w-[291px] laptop:w-[140px]">
            <Link href="/contacts">Связь с нами</Link>
          </li>
        </ul>
        <div className="w-[182px] flex gap-[10px] items-center laptop:ml-[135px] tablet:ml-[30px] tablet:mt-[-8px] mobile:ml-0 mobile:mt-[35px]">
          <p>Мы в LinkedIn</p>
          <Image
            src={linkedin.src}
            width={32}
            height={32}
            alt="linkedin icon"
          />
        </div>
      </div>
    </footer>
  );
}
