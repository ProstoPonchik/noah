import Image from "next/image";
import Bubles from "@/public/pictures/main/secondSection/bubles.svg";
import Client from "@/public/pictures/main/secondSection/client.png";
import Worker from "@/public/pictures/main/secondSection/worker.png";

export default function SecondSection() {
  return (
    <section className="relative flex desktopxs:max-w-[1200px] tablet:flex-row tablet:max-w-[700px] mobile:flex-col-reverse mobile:mt-[60px] mobile:max-w-[330px] tablet:mt-0">
      <div className="tablet:max-w-[350px] mobile:mt-[20px]">
        <Image
          src={Bubles.src}
          alt="bubles"
          width={150}
          height={150}
          className="absolute z-0"
        />
        <Image
          src={Client.src}
          alt="cleint"
          width={280}
          height={369}
          className="relative z-10 laptop:w-[300px] laptop:h-[400px]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="107"
          height="107"
          viewBox="0 0 107 107"
          fill="none"
          className="absolute laptop:top-[184px] left-[-5px] mobile:top-[525px]"
        >
          <circle cx="53.5" cy="53.5" r="53.5" fill="#E899B0" />
        </svg>
        <div className="bg-white shadow-header rounded-[20px] py-[15px] px-[10px] w-[236px] flex items-end flex-col mt-[-100px] z-40 relative laptop:ml-[170px] mobile:ml-[100px]">
          <div className="flex items-start justify-between mb-[5px] min-w-[210px] ">
            <Image src={Worker.src} alt="worker" width={34} height={34} />
            <p className="font-inter text-[12px] font-medium bg-[#DEE0E3] p-2 rounded-[12px] max-w-[160px]">
              Я протестировал гипотезы. Высылаю анализ и предложения по
              улучшению работы.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="25"
            viewBox="0 0 40 25"
            fill="none"
          >
            <g clipPath="url(#clip0_805_8272)">
              <path
                d="M11.9678 0H28.0322C34.6386 0 40 5.36269 40 11.9678V12.2097C40 18.8148 34.6373 24.1775 28.0322 24.1775H11.9678C5.36269 24.1775 0 18.8148 0 12.2097V11.9678C0 5.36269 5.36269 0 11.9678 0Z"
                fill="#19B6B1"
              />
              <path
                opacity="0.4"
                d="M13.6371 14.3244C14.6414 13.9084 15.1182 12.7571 14.7023 11.7529C14.2863 10.7487 13.135 10.2718 12.1308 10.6878C11.1266 11.1037 10.6497 12.255 11.0657 13.2592C11.4816 14.2634 12.6329 14.7403 13.6371 14.3244Z"
                fill="white"
              />
              <path
                opacity="0.7"
                d="M21.3332 13.8985C22.1018 13.1299 22.1018 11.8838 21.3332 11.1152C20.5646 10.3466 19.3185 10.3466 18.5499 11.1152C17.7813 11.8838 17.7813 13.1299 18.5499 13.8985C19.3185 14.6671 20.5646 14.6671 21.3332 13.8985Z"
                fill="white"
              />
              <path
                d="M28.912 12.9579C29.1617 11.9 28.5065 10.84 27.4486 10.5904C26.3907 10.3407 25.3307 10.9959 25.081 12.0537C24.8313 13.1116 25.4865 14.1716 26.5444 14.4213C27.6023 14.671 28.6623 14.0158 28.912 12.9579Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_805_8272">
                <rect width="40" height="24.1775" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <article className="desktopxs:max-w-[685px] font-ttnorms ml-[125px] laptop:ml-[80px] laptop:max-w-[470px] tablet:max-w-[370px] tablet:ml-[20px] mobile:ml-0 ">
        <h3 className="laptop:text-[54px] tablet:text-[48px] font-medium desktopxs:leading-[60px] mobile:leading-10 mb-[20px] mobile:text-4xl">
          Искусственный интеллект под присмотром 👀экспертов
        </h3>
        <p className="tablet:text-[22px] leading-[30px] mobile:text-base">
          NOAH — агентство, которое бок о бок работает с ИИ-технологией. Это не
          означает, что все задачи выполняет нейронная сеть — она лишь улучшает
          и дополняет то, что бережно создаёт руками команда маркетологов,
          дизайнеров и копирайтеров.
        </p>
      </article>
    </section>
  );
}
