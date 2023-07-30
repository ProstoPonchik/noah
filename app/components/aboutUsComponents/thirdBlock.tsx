import Image from "next/image";
import ThirdBlockFirstSVG from "@/public/pictures/about/about third block first group.svg";
import ThirdBlockSecondSVG from "@/public/pictures/about/about third block second group.svg";
import { cardPeopleList } from "./CardPeopleList";
import CardPeople from "./CardPeople";
import ButtonSendCV from "../buttons/buttonSendCV";

interface ThirdBlockProps {
  windowSize: WindowSize;
}

interface WindowSize {
  width: number;
  height: number;
}

const ThirdBlock: React.FC<ThirdBlockProps> = ({ windowSize }) => {
  const { width, height } = windowSize;
  return (
    <div
      className="relative bg-stone-950 py-[160px]
		desktopxs:py-[160px]
		laptop:pt-[100px] laptop:pb-[95px]
		overflow-x-hidden
		overflow-y-hidden
		"
    >
      <Image
        src={ThirdBlockFirstSVG}
        width={width > 1024 ? 528 : 363}
        alt="Third block first group"
        className="absolute top-[150px] left-[-156px]
				desktopxs:top-[150px] desktopxs:left-[-156px]
				laptop:top-[-51px] laptop:left-[-142px]
				"
      />
      <Image
        src={ThirdBlockSecondSVG}
        width={width > 1024 ? 528 : 449}
        alt="Third block second group"
        className="absolute top-[908px] left-[2264px]
					qhd:top-[908px] qhd:left-[2264px]
					desktop:top-[908px] desktop:left-[1642px]
					desktopxs:top-[908px] desktopxs:left-[1101px]
					laptop:top-[1346px] laptop:left-[741px]
					"
      />
      <div className="">
        <div
          className="flex flex-col items-center mb-[66px]
				desktopxs:mb-[66px]
				laptop:mb-[34px]
				"
        >
          <h3
            className="
                    text-white
                    text-[54px]
                    font-medium
                    leading-[60px]
                    mb-[40px]
					desktopxs:mb-[40px]
					laptop:mb-[20px]
					text-center
                    "
          >
            Кто работает над вашим <br></br> продвижением
          </h3>
          <p
            className="
                    text-white
                    text-[22px]
                    font-light
                    leading-[30px]
                    "
          >
            Эксперты под руководством Захара Шатрова
          </p>
        </div>

        <div
          className="relative flex flex-wrap flex-row gap-x-8 gap-yy-[60px] items-center justify-center max-w-[1268px] mx-auto z-10
				desktopxs:gap-y-[60px]
				laptop:gap-y-[22px]
				"
        >
          {cardPeopleList.map((card, index) => {
            return (
              <div key={index}>
                <CardPeople {...card} />
              </div>
            );
          })}
          <div
            className="flex flex-col justify-center max-w-[615px] bg-zinc-400 bg-opacity-20 rounded-[20px] gap-[30px] max-h-[455px] pl-[50px] pr-[80px] mx-auto self-stretch
					
						desktopxs:py-0
						laptop:py-[40px]
						desktopxs:pr-[80px]
						laptop:pr-[45px]
						desktopxs:pl-[50px]
						laptop:pl-[27px]
					"
          >
            <div
              className="text-white
                                        text-[32px]
                                        font-medium
										desktopxs:font-medium
										laptop:font-bold
                                        leading-10
										desktopxs:max-w-[472px]
                                        "
            >
              Станьте частью команды NOAH ✨
            </div>
            <div
              className="text-white
                                        text-base
                                        font-normal
                                        leading-normal
                                        font-inter
										desktopxs:text-base
										laptop:text-lg
										desktopxs:leading-normal
										laptop:leading-7
										desktopxs:font-inter
										laptop:font-ttnorms
                                        "
            >
              Мы хотим, чтобы NOAH оставалось современным и технологичным
              агентством. Поэтому мы всегда ищем топовых специалистов.<br></br>
              <br></br>Eсли чувствуете, что мы сработаемся — отправляйте своё
              резюме и портфолио.
            </div>
            <ButtonSendCV />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
