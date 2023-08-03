import { NineSectionContent } from "./content/NineSectionContent";
import Image from "next/image";

export default function NineSection() {
  return (
    <section className="flex flex-col gap-[80px] items-center" id="services">
      <h4 className="text-center text-stone-950 text-[54px] font-medium leading-[60px] tablet:text-5xl mobile:text-4xl">
        Разные цели — разные тарифы
      </h4>
      <div className="flex flex-wrap desktopxs:gap-x-[33px] laptop:gap-x-[15px] laptop:flex-row tablet:flex-col tablet:gap-y-[30px] justify-center">
        {NineSectionContent.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={
                item.textColor === "white"
                  ? `desktopxs:max-w-[398px] desktopxs:pb-[40px] desktopxs:px-[30px] tablet:pb-[40px] tablet:px-[30px] laptop:p-[10px] mobile:py-[40px] mobile:px-[5px] mobile:max-w-[350px] laptop:max-w-[320px] rounded-[20px] flex flex-col items-center text-white`
                  : `desktopxs:max-w-[398px] desktopxs:pb-[40px] desktopxs:px-[30px] tablet:pb-[40px] tablet:px-[30px] laptop:p-[10px] mobile:py-[40px] mobile:px-[5px] mobile:max-w-[350px] laptop:max-w-[320px] rounded-[20px] flex flex-col items-center text-[#0E0F0F]`
              }
              style={{ backgroundColor: item.bg }}
            >
              <span className="text-center text-stone-950 text-xs font-normal leading-none mb-[40px] p-[5px]  w-[150px] bg-orange-200 rounded-bl-[3px] rounded-br-[3px] justify-center items-center ">
                {item.topText}
              </span>
              <h5 className="text-center tablet:text-[22px] mobile:text-xl font-bold leading-[30px]">
                {item.headerText}
              </h5>
              <div className="flex mt-[16px]">
                <p className="text-[32px] font-bold leading-10 mr-[3px]">от</p>
                <h6 className="text-[54px] font-medium leading-[60px]">
                  {item.price}
                </h6>
                {item.additionalStar ? (
                  <span
                    className={
                      item.bg !== "white" ? "text-white" : "text-[#C8CCD1]"
                    }
                  >
                    *
                  </span>
                ) : null}
              </div>
              <p className="mt-[20px] text-sm font-normal leading-tight text-center max-w-[330px]">
                {item.priceText}
              </p>
              <div className="mt-[40px] flex flex-col items-start">
                <p className="text-base font-bold leading-normal mb-[24px]">
                  Что делаем в рамках тарифа:
                </p>
                <ul className="grid grid-cols-1 gap-y-[20px]">
                  {item.planText.map((text: string, index: number) => {
                    return (
                      <li key={index} className="flex items-center">
                        <Image
                          src={item.image}
                          alt="check"
                          width={20}
                          height={20}
                          className="mr-[10px]"
                        />
                        <p className="text-sm font-normal leading-tight">
                          {text}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {item.additionalStar ? (
                <p
                  className={
                    item.bg !== "white"
                      ? " text-xs font-normal leading-none text-zinc-200 mt-[30px]"
                      : "text-xs font-normal leading-none text-[#C8CCD1] mt-[30px]"
                  }
                >
                  {item.additionalStar}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
      <button className="max-w-[286px] bg-[#19B6B1] rounded-[5px] px-[53px] py-[15px] text-white text-base font-bold leading-7">
        Заказать консультацию
      </button>
    </section>
  );
}
