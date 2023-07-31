import Image from "next/image";
import PlanetImage from "@/public/pictures/main/thirdSection/planet.svg";
import { ThirdSectionArticleContent } from "./content/ThirdSectionArticleContent";
import { ThirdSectionUlContent } from "./content/ThirdSectionUlContent";

export default function ThirdSection() {
  return (
    <section className="bg-[#0E0F0F] w-full flex flex-col items-center relative">
      {/*тут вставил min-w для того что бы мой костыль работал как надо, там для всех разерешний которые сейчас надо одинаковые ширинатак что все ок */}
      <article className="font-ttnorms text-white flex items-start flex-col mt-[98px] min-w-[1176px] mb-[100px]">
        <h3 className="text-[54px] font-medium leading-[60px] max-w-[606px] mb-[80px]">
          Мы доверяем нашей технологии
        </h3>
        <ul className="flex flex-col flex-wrap max-h-[180px] gap-[60px] justify-end">
          {ThirdSectionArticleContent.map((item: any, index: number) => {
            return (
              <li
                className="h-[60px] items-center flex max-w-[286px]"
                key={index}
              >
                {index !== 4 ? (
                  <Image
                    src={item.image}
                    alt={item.text}
                    width={50}
                    height={50}
                  />
                ) : null}
                <p className="ml-[15px]">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </article>
      <div className="mb-[135px] text-white flex flex-col items-center">
        <h4 className="text-[24px] font-bold leading-8 max-w-[950px] mb-[60px] text-center">
          Команда непрерывно обучает нейронную сеть, чтобы она становилась
          умнее, быстрее и приносила фантастические результаты нашим клиентам
        </h4>
        <ul className="grid gap-[30px] grid-cols-4 max-w-[1136px]">
          {ThirdSectionUlContent.map((item: any, index: number) => {
            return (
              <li key={index}>
                <h5
                  className="text-[54px] font-medium leading-[60px] mb-[30px]"
                  style={{ color: `#${item.headerColor}` }}
                >
                  {item.headerText}
                </h5>
                <p className="text-[22px] leading-[30px] font-normal">
                  {item.paragraphText}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <Image
        src={PlanetImage}
        alt="planet"
        width={400}
        height={400}
        className="absolute top-0 right-0"
      />
      <div className="w-full bg-white flex flex-col items-center py-[127px]">
        <h2 className="max-w-[700px] text-[54px] font-medium leading-[60px] text-center mb-[80px] ">
          Почему мы делаем ставки на LinkedIn
        </h2>
        <div className="grid grid-cols-4 gap-[30px] max-w-[1270px] justify-between">
          <article className="max-w-[285px]">
            <svg
              className="mb-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
            >
              <path
                d="M56.0019 28C37.334 33.1542 33.1562 37.334 28.0019 56C22.8458 37.334 18.668 33.1562 0 28C18.668 22.8458 22.8458 18.668 28 0C33.1542 18.668 37.334 22.8458 56 28H56.0019Z"
                fill="#19B6B1"
              />
            </svg>
            <p className="text-[22px] leading-[30px]">
              В LinkedIn зарегистрировано <strong>900 млн</strong> человек, 4 из
              5 пользователей являются лицами, принимающими бизнес-решения
            </p>
          </article>
          <article className="max-w-[285px]">
            <svg
              className="mb-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
            >
              <path
                d="M28.4502 13.2793L37.1014 0L36.6777 16.091L51.101 10.6954L41.7647 23.4518L56.4492 28.001L41.7647 32.5482L51.101 45.3046L36.6777 39.909L37.1014 56L28.4502 42.7207L19.797 56L20.2208 39.909L5.79748 45.3046L15.1337 32.5482L0.449219 28.001L15.1337 23.4518L5.79748 10.6954L20.2208 16.091L19.797 0L28.4502 13.2793Z"
                fill="#E2C89F"
              />
            </svg>
            <p className="text-[22px] leading-[30px]">
              <strong>77%</strong> опрошенных маркетологов утверждают, что
              LinkedIn — лучшая платформа для генерации органического трафика
            </p>
          </article>
          <article className="max-w-[285px]">
            <svg
              className="mb-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="56"
              viewBox="0 0 58 56"
              fill="none"
            >
              <path
                d="M47.8694 28.3044C60.3141 45.4867 46.3846 59.4162 29.2024 46.9715C12.0201 59.4162 -1.90938 45.4867 10.5353 28.3044C-1.90938 11.1221 12.0201 -2.80733 29.2024 9.63736C46.3846 -2.80733 60.3141 11.1221 47.8694 28.3044Z"
                fill="#C8CCD1"
              />
            </svg>
            <p className="text-[22px] leading-[30px]">
              <strong>82%</strong> опрошенных B2B-маркетологов утверждают, что
              LinkedIn даёт им лучшие результаты, а <strong>40%</strong>, что
              социальная сеть приносит им самые качественные лиды
            </p>
          </article>
          <article className="max-w-[285px]">
            <svg
              className="mb-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
            >
              <path
                d="M56.3496 25.3422H34.7693L50.0295 10.082L46.2699 6.32011L31.0097 21.5826V0H25.6918V21.5826L10.4316 6.32011L6.66972 10.082L21.9323 25.3422H0.349609V30.6601H21.9323L6.66972 45.9203L10.4316 49.6799L25.6918 34.4196V56H31.0097V34.4196L46.2699 49.6799L50.0295 45.9203L34.7693 30.6601H56.3496V25.3422Z"
                fill="#E899B0"
              />
            </svg>
            <p className="text-[22px] leading-[30px]">
              Просто грамотно заполненный профиль уже даёт <strong>+30%</strong>{" "}
              больше просмотров
            </p>
          </article>
        </div>
        <p className="text-[24px] leading-[32px] font-bold text-[#19B6B1] mt-[80px] max-w-[720px] text-center">
          В NOAH мы знаем лучшие практики продвижения в LinkedIn и обещаем
          высокие результаты
        </p>
      </div>
    </section>
  );
}
