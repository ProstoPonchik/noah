import Image from "next/image";
import Bubbles from "@/public/pictures/main/tenSection/bubles.svg";
import Women from "@/public/pictures/main/tenSection/women.jpeg";

export default function TenSection() {
  return (
    <section className="flex justify-center w-full bg-white ">
      <div className=" flex flex-wrap max-w-[1267px] py-[45px] tablet:items-start mobile:justify-center">
        <h4 className="desktopxs:max-w-[834px] laptop:max-w-[590px] tablet:max-w-[340px] mobile:max-w-[340px] min-w-[340px] text-stone-950 text-[32px] font-bold leading-10 relative items-center flex">
          На всех тарифах с вами работает персональный аккаунт-менеджер ,
          который помогает решить вопросы на любом этапе работы
        </h4>
        <div className="relative max-w-[416px] ml-[24px]">
          <Image
            src={Bubbles.src}
            alt="bubbles"
            width={150}
            height={150}
            className="absolute z-0 top-[30px]"
          />
          <Image
            src={Women.src}
            alt="women"
            width={150}
            height={150}
            className="absolute rounded-full w-[150px] h-[150px] object-cover  z-20 top-0 right-0"
          />
          <div className="flex max-w-[300px] p-[15px]  flex-col z-10 relative mt-[75px] ml-[35px] mr-[70px] mb-[85px] bg-white rounded-[20px] ">
            <span className="text-white text-xs font-normal leading-none p-[5px] bg-teal-500 rounded-[5px] max-w-[120px] mb-3">
              Менеджер: <strong>Алина</strong>
            </span>
            <p className="text-black text-base font-bold leading-normal">
              Диана, здравствуйте<br></br> Отправляю вашу стратегию
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="235"
            height="167"
            viewBox="0 0 235 167"
            fill="none"
            className="absolute bottom-0 right-0"
          >
            <path
              d="M196.192 70.5634C193.704 69.9801 191.763 68.0286 191.182 65.5354L189.678 59.0879L188.174 65.5354C187.592 68.0318 185.648 69.9801 183.163 70.5634L176.738 72.0727L183.163 73.582C185.651 74.1653 187.592 76.1168 188.174 78.61L189.678 85.0575L191.182 78.61C191.763 76.1136 193.708 74.1653 196.192 73.582L202.617 72.0727L196.192 70.5634Z"
              fill="#DEE0E3"
            />
            <path
              d="M132.33 112.937C188.497 83.5326 227.173 46.506 218.715 30.2356C210.257 13.9652 157.867 24.6124 101.7 54.0167C45.5326 83.4209 6.85666 120.448 15.3148 136.718C23.7729 152.988 76.1622 142.341 132.33 112.937Z"
              stroke="#DEE0E3"
              stroke-width="4"
              stroke-miterlimit="10"
            />
            <path
              d="M33.885 110.404C30.5767 109.625 27.9933 107.033 27.2173 103.713L25.2151 95.1377L23.2129 103.713C22.437 107.033 19.8536 109.625 16.5453 110.404L8 112.413L16.5453 114.423C19.8536 115.201 22.437 117.794 23.2129 121.114L25.2151 129.689L27.2173 121.114C27.9933 117.794 30.5767 115.201 33.885 114.423L42.4303 112.413L33.885 110.404Z"
              fill="#DEE0E3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
