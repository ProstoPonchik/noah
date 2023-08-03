import { EightSectionContent } from "./content/EightSectionContent";
import Image from "next/image";

export default function EightSection() {
  return (
    <section className="max-w-[1044px] items-center flex flex-col">
      <h3 className="text-center text-stone-950 tablet:text-[54px] mobile:text-4xl font-medium leading-[60px] mb-[47px]">
        Наш подход приносит результаты
      </h3>
      <div className="flex tablet:min-w-[400px] mobile:min-w-[270px] justify-between mb-[80px]">
        <div className="flex flex-col">
          <p className="text-center text-black tablet:text-[22px] mobile:text-base font-bold leading-[30px] mb-[3px]">
            Личные бренды
          </p>
          <div className="tablet:w-[170px] mobile:w-[124px] h-[0px] border border-teal-500" />
        </div>
        <p className="text-center text-neutral-300 tablet:text-[22px] mobile:text-base font-bold leading-[30px]">
          Бренды компаний
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-[80px] laptop:max-w-[897px] tablet:max-w-[700px] mobile:max-w-[340px]">
        {EightSectionContent.map((item: any, index: number) => {
          return (
            <li
              key={index}
              className="flex tablet:flex-row mobile:flex-col py-[41px] mobile:px-[12px] tablet:px-[62px] bg-white  rounded-[20px]"
            >
              <div className="flex flex-col min-w-[200px] max-w-[220px] w-full tablet:min-h-[330px] justify-between mobile:gap-y-[20px]">
                {" "}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M24.4457 6C25.0351 6 25.6003 6.23413 26.0171 6.65087C26.4338 7.06762 26.668 7.63285 26.668 8.22222V23.7778C26.668 24.3671 26.4338 24.9324 26.0171 25.3491C25.6003 25.7659 25.0351 26 24.4457 26H8.89019C8.30082 26 7.73559 25.7659 7.31884 25.3491C6.90209 24.9324 6.66797 24.3671 6.66797 23.7778V8.22222C6.66797 7.63285 6.90209 7.06762 7.31884 6.65087C7.73559 6.23413 8.30082 6 8.89019 6H24.4457ZM23.8902 23.2222V17.3333C23.8902 16.3727 23.5086 15.4513 22.8293 14.772C22.15 14.0927 21.2286 13.7111 20.268 13.7111C19.3235 13.7111 18.2235 14.2889 17.6902 15.1556V13.9222H14.5902V23.2222H17.6902V17.7444C17.6902 16.8889 18.3791 16.1889 19.2346 16.1889C19.6472 16.1889 20.0429 16.3528 20.3346 16.6445C20.6263 16.9362 20.7902 17.3319 20.7902 17.7444V23.2222H23.8902ZM10.9791 12.1778C11.4742 12.1778 11.9489 11.9811 12.299 11.631C12.6491 11.281 12.8457 10.8062 12.8457 10.3111C12.8457 9.27778 12.0124 8.43333 10.9791 8.43333C10.4811 8.43333 10.0034 8.63117 9.65129 8.98332C9.29914 9.33547 9.1013 9.81309 9.1013 10.3111C9.1013 11.3444 9.94575 12.1778 10.9791 12.1778ZM12.5235 23.2222V13.9222H9.44575V23.2222H12.5235Z"
                      fill="#0E0F0F"
                    />
                  </svg>
                  <h5 className="text-stone-950 text-[32px] font-bold leading-10">
                    {item.name}
                  </h5>
                  <span className=" text-sm font-normal leading-tight text-[#B5B7BA]">
                    {item.subText}
                  </span>
                </div>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={50}
                />
              </div>
              <div className="tablet:ml-[70px] mobile:ml-0 flex flex-col tablet:gap-y-[10px] mobile:gap-y-[20px]">
                <h6 className="text-stone-950 text-2xl font-bold leading-loose ">
                  Цель:
                </h6>
                <p className="desktopxs:mb-[30px] laptop:mb-0 ">{item.point}</p>
                <h6 className="text-stone-950 text-2xl font-bold leading-loose ">
                  Выбранные тариф:
                </h6>
                <p className="desktopxs:mb-[30px] laptop:mb-0 ">
                  {item.selectedPlan}
                </p>
                <h6 className="text-stone-950 text-2xl font-bold leading-loose ">
                  Результат:
                </h6>
                <p>{item.result}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
