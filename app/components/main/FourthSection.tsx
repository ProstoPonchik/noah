import Image from "next/image";
import Separator from "@/public/pictures/main/fifthSection/buble-line.svg";
import LinkedinMen from "@/public/pictures/main/fifthSection/linkedin-men.png";
import Like from "@/public/pictures/main/fifthSection/like.svg";
import LikeFinger from "@/public/pictures/main/fifthSection/like-finger.png";
import Bubbles from "@/public/pictures/main/fifthSection/bubles.svg";
import { FifthSectionArticleContent } from "./content/FifthSectionArticleContent";

export default function FourthSection() {
  return (
    <section className="flex flex-wrap  pl-[90px] max-w-[1440px]">
      <article className="max-w-[673px]">
        <h3 className="mb-[40px] text-[54px] font-medium leading-[60px]">
          Поток возможностей через чёткое 🎯позиционирование
        </h3>
        <p className="text-[22px] leading-[30px] mb-[15px] text-[#B5B7BA]">
          Без продуманного бренда непросто запустить даже самый инновационный
          продукт.
        </p>
        <p className="text-[22px] leading-[30px] text-[#B5B7BA]">
          Поэтому перед стартом мы рекомендуем заложить фундамент проекта:
          раскрыть ценности и донести их на английском языке через ваш профиль в
          LinkedIn.
        </p>
      </article>
      <div className="relative mt-[35px]">
        <Image
          src={Bubbles.src}
          alt="bubbles"
          width={150}
          height={150}
          className="absolute z-0 right-[-36px] top-[-36px]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="230"
          height="239"
          viewBox="0 0 230 239"
          fill="none"
          className="absolute top-[105px] left-[70px]"
        >
          <circle cx="115" cy="116" r="81" fill="#DEE0E3" />
          <line
            x1="46.7678"
            y1="2.23223"
            x2="227.768"
            y2="183.232"
            stroke="#C8CCD1"
            stroke-width="5"
          />
          <line
            x1="1.76777"
            y1="2.23223"
            x2="182.768"
            y2="183.232"
            stroke="#C8CCD1"
            stroke-width="5"
          />
          <line
            x1="16.7678"
            y1="56.2322"
            x2="197.768"
            y2="237.232"
            stroke="#C8CCD1"
            stroke-width="5"
          />
        </svg>
        <div className="max-w-[347px] shadow-header rounded-[20px] pt-[38px] pl-[20px] pr-[35px] pb-[47px] ml-[157px] relative z-10 bg-white">
          <div className="flex">
            <Image
              src={LinkedinMen.src}
              alt="Алексей Павлов"
              width={88}
              height={88}
              className="mr-[20px]"
            />
            <div className="flex flex-col">
              <h4 className="mb-[18px] text-[22px] font-bold leading-[120%]">
                Алексей Павлов
              </h4>
              <div className="grid grid-cols-2 gap-x-[28px]">
                <h5 className="text-[22px] font-bold leading-[120%]">18 260</h5>
                <h5 className="text-[22px] font-bold leading-[120%]">500+</h5>
                <p className="text-[12px]  leading-[120%] text-[#8F8F8F]">
                  Отслеживающих
                </p>
                <p className="text-[12px] leading-[120%] text-[#8F8F8F]">
                  Контактов
                </p>
              </div>
            </div>
          </div>
          <Image
            src={Separator.src}
            alt="separator"
            width={307}
            height={6}
            className="mt-[30px] mb-[20px]"
          />
          <div className="relative min-w-[312px] bg-zinc-200 rounded-[20px] ml-[62px] pl-[30px] pr-[14px] py-[18px]">
            <h6 className="text-[21px] font-bold leading-relaxed mb-[8px]">
              Общие сведения
            </h6>
            <p className="text-black text-xs font-normal leading-none">
              Вместе с невероятной командой Choose Few создаю IT-решения для
              крупнейших маркетинговых агентств.
            </p>
            <Image
              src={Like.src}
              alt="like"
              width={150}
              height={150}
              className="absolute bottom-[-85px] right-[-50px]"
            />
          </div>
          <div className="relative">
            <h6 className="text-black text-[21px] font-bold leading-relaxed mb-4">
              Опыт
            </h6>
            <div className="flex">
              <span className="flex w-[52px] h-[52px] bg-zinc-200 mr-[22px]" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="181"
                height="46"
                viewBox="0 0 181 46"
                fill="none"
              >
                <rect width="90" height="15" rx="7.5" fill="#DEE0E3" />
                <rect x="98" width="29" height="15" rx="7.5" fill="#DEE0E3" />
                <rect y="31" width="181" height="15" rx="7.5" fill="#DEE0E3" />
              </svg>
            </div>
            <Image
              src={LikeFinger.src}
              alt="like-finger"
              width={150}
              height={150}
              className="absolute top-[15px] left-[-100px]"
            />
          </div>
        </div>
      </div>
      <article className="max-w-[1200px] mt-[-25px]">
        <h4 className="text-stone-950 text-[32px] font-bold leading-10 mb-[60px]">
          Как мы создаём ваш образ в LinkedIn
        </h4>
        <ul className="flex flex-wrap gap-x-[75px] gap-y-[60px]">
          {FifthSectionArticleContent.map((item: any, index: number) => {
            return (
              <li key={index} className="max-w-[345px] flex items-start">
                <Image src={item.image} alt={item.alt} width={34} height={34} />
                <p className="text-stone-950 text-[22px] font-normal leading-[30px] ml-[10px]">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
