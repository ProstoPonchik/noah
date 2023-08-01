import Image from "next/image";
import Person from "@/public/pictures/main/sevenSection/person.png";
import Logo from "@/public/pictures/main/sevenSection/logo.svg";

export default function SevenSection() {
  return (
    <section className="relative desktopsx:flex max-w-[1120px] mobile:hidden">
      <Image
        src={Person.src}
        alt="Захар Шатров"
        width={335}
        height={445}
        className="rounded-[20px]"
      />
      <article className="relative ml-[106px]">
        <p className="mt-[120px] ml-[50px] text-black text-[22px] font-bold leading-[30px]">
          {" "}
          Это результат моей многолетней работы. Я вложил в агентство весь свой
          предпринимательский опыт и дополнил его уникальной технологией,
          которая доводит каждую деталь до совершенства. Стратегии NOAH — это
          мощный инструмент для привлечения денег и связей, в котором я уверен
        </p>
        <div className="absolute bottom-0 right-0 max-w-[347px]">
          <p className="text-black text-[22px] font-bold leading-[30px] mb-[10px]">
            Захар Шатров
          </p>
          <span className="text-zinc-400 text-base font-normal">
            основатель группы компаний и крупнейшего русскоязычного делового
            сообщества в регионе MENA
          </span>
        </div>

        <div className="absolute min-w-[680px] min-h-[455px] top-0 left-0 pointer-events-none">
          <Image
            src={Logo.src}
            alt="logo"
            width={140}
            height={30}
            className="absolute top-[45px] left-[93px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="54"
            viewBox="0 0 63 54"
            fill="none"
            className="absolute top-0 left-0"
          >
            <path
              d="M58.6 42.3312L39.2 53.5312C34.6667 48.8645 32.4 42.6645 32.4 34.9312C32.4 19.9978 39.0667 8.53116 52.4 0.531158L63 10.3312C57 15.3978 54 21.9312 54 29.9312C54 35.1312 55.5333 39.2645 58.6 42.3312ZM26.2 42.3312L6.8 53.5312C2.26667 48.8645 0 42.6645 0 34.9312C0 19.9978 6.66667 8.53116 20 0.531158L30.6 10.3312C24.6 15.3978 21.6 21.9312 21.6 29.9312C21.6 35.1312 23.1333 39.2645 26.2 42.3312Z"
              fill="#19B6B1"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="574"
            height="116"
            viewBox="0 0 574 116"
            fill="none"
            className="absolute top-0 left-[106px]"
          >
            <path
              d="M573.249 115.407C573.249 51.817 521.498 0.0687561 457.858 0.0687561L0.5 0.0687561V5.32012H457.858C518.584 5.32012 567.995 54.7084 567.995 115.407H573.249Z"
              fill="#19B6B1"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="234"
            viewBox="0 0 6 234"
            fill="none"
            className="absolute top-[114px] right-0"
          >
            <path
              d="M5.33789 0.531158L5.33787 233.889L0.08651 233.889L0.0865302 0.531158L5.33789 0.531158Z"
              fill="#19B6B1"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="295"
            height="116"
            viewBox="0 0 295 116"
            fill="none"
            className="absolute bottom-0 left-0"
          >
            <path
              d="M5.25376 0.592682H0C0 64.183 51.7718 115.931 115.391 115.931H294.5V110.68H115.391C54.6646 110.68 5.25376 61.2916 5.25376 0.592682Z"
              fill="#19B6B1"
            />
          </svg>
        </div>
      </article>
    </section>
  );
}
