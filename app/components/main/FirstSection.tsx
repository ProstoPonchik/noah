import Image from "next/image";
import LinkedinBackground from "@/public/pictures/main/firstSection/linkedin-background.svg";
import Lines from "@/public/pictures/main/firstSection/lines.svg";
import Arrows from "@/public/pictures/main/firstSection/arrows.svg";
import Stars from "@/public/pictures/main/firstSection/stars.svg";
import LinkedinMen from "@/public/pictures/main/firstSection/linkedin-men.png";
import LinkedinWomen from "@/public/pictures/main/firstSection/linkedin-women.png";
import AddUser from "@/public/pictures/main/firstSection/add-user.svg";

export default function FirstSection() {
	return (
		<section className="desktopxs:max-w-[1440px] flex mobile:flex-col font-ttnorms mobile:max-w-[330px] tablet:max-w-full tablet:mb-[150px] laptop:flex-row justify-between">
			<article className="laptop:w-[634px] mt-[98px] desktopxs:ml-[86px] tablet:max-w-[530px] laptop:ml-[27px] mobile:max-w-[330px]">
				<h1 className="relative laptop:text-[62px] tablet:text-[50px] font-medium leading-[70px] mobile:m-0 mobile:text-4xl">
					Продвигайте себя и свой бренд{" "}
					<span className="relative z-10">в LinkedIn</span>
					<Image
						src={LinkedinBackground.src}
						alt="Linkeind"
						width={266}
						height={48}
						className="absolute tablet:w-[226px] tablet:h-[48px] tablet:bottom-[-6px] desktopxs:right-[55px] z-0 laptop:w-[266px] laptop:left-9 laptop:bottom-[-10px] tablet:left-[300px] mobile:w-[150px] mobile:h-[30px] mobile:bottom-0 mobile:left-0"
					/>
				</h1>
				<p className="mt-5 laptop:text-[22px] tablet:text-lg leading-[30px] tablet:max-w-[380px] mobile:max-w-[265px]">
					Составим стратегию продвижения в №1 деловой социальной сети и
					автоматизируем общение с партнёрами
				</p>
				<button className="laptop:mt-[60px] px-[53px] py-[15.5px] bg-[#0E0F0F] rounded-[5px] text-white text-4 font-bold leading-[180%] mobile:mt-[24px]">
					Заказать консультацию
				</button>
			</article>
			<div className="relative desktopxs:ml-0 laptop:ml-[-200px] laptop:mt-[100px] tablet:mt-[-275px] tablet:ml-[150px] mobile:m-0">
				<Image
					src={Arrows.src}
					alt="arrows"
					width={196}
					height={55}
					className="absolute tablet:w-[200px] tablet:h-[55px] tablet:top-[382px] tablet:left-0 tablet:z-0 mobile:w-[105px] mobile:h-[55px] mobile:left-[-60px] mobile:top-[300px] mobile:z-30"
				/>
				<Image
					src={Stars.src}
					alt="stars"
					width={85}
					height={83}
					className="absolute top-[20px] left-[147px] z-0 desktopxs:flex mobile:hidden"
				/>
				<Image
					src={Lines.src}
					alt="lines"
					width={210}
					height={218}
					className="absolute top-[12px] right-[65px] z-0 tablet:top-[40px] tablet:right-[-30px] "
				/>
				<div className="relative flex w-[310px] flex-col items-center shadow-firstBlockPersonCard bg-white rounded-[18px] ml-[242px] desktopxs:mr-[98px] laptop:mr-0 tablet:mr-0 p-[26px] mt-[102px] z-10 mobile:mt-[55px] tablet:mt-[120px] mobile:ml-0 tablet:ml-[242px]">
					<span className="absolute z-20 top-[-13px] right-[-13px] p-3 bg-[#DEE0E3] rounded-[10px]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M18.4932 7.23064C18.4932 6.68164 18.0493 6.23464 17.4993 6.23164L9.50625 6.18164H9.50025C8.95025 6.18164 8.50425 6.62564 8.50025 7.17564C8.49625 7.72764 8.94125 8.17864 9.49425 8.18164L15.0522 8.21664L6.79325 16.4746C6.40225 16.8656 6.40225 17.4986 6.79325 17.8886C6.98825 18.0846 7.24425 18.1816 7.50025 18.1816C7.75625 18.1816 8.01225 18.0846 8.20725 17.8886L16.4952 9.60064L16.5002 15.1826C16.5002 15.7346 16.9482 16.1816 17.5002 16.1816H17.5013C18.0533 16.1816 18.5002 15.7326 18.5002 15.1806L18.4932 7.23064Z"
								fill="#0E0F0F"
							/>
						</svg>
					</span>
					<Image
						src={LinkedinMen.src}
						alt="Дмитрий стрелец"
						width={87}
						height={87}
					/>
					<h3 className="text-[21px] font-bold leading-[120%] mb-[18px] mt-[22px] ">
						Дмитрий стрелец
					</h3>
					<div className="grid grid-cols-3 gap-x-[24px] gap-y-[3px] justify-items-center mb-[14px]">
						<p className="text-[21px] font-bold leading-[120%]">1900</p>
						<p className="text-[21px] font-bold leading-[120%]">47</p>
						<p className="text-[21px] font-bold leading-[120%]">973</p>
						<span className="text-[12px] leading-[120%] text-[#8F8F8F]">
							Контактов
						</span>
						<span className="text-[12px] leading-[120%] text-[#8F8F8F]">
							Неотвеченых пердложений
						</span>
						<span className="text-[12px] leading-[120%] text-[#8F8F8F]">Показа</span>
					</div>
					<span className="absolute z-20 tablet:left-[-18px] tablet:bottom-[-52px] mobile:bottom-[-20px] mobile:left-[70px]">
						<Image
							src={LinkedinWomen.src}
							width={77}
							height={77}
							alt="linkedin-women"
							className="tablet:w-[77px] tablet:h-[77px] mobile:w-[40px] mobile:h-[40px]"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="23"
							viewBox="0 0 22 23"
							fill="none"
							className="absolute z-30 right-[-2px] bottom-[-5px]"
						>
							<rect y="1" width="21.0877" height="21.0877" rx="2.63596" fill="white" />
							<path
								d="M18.7446 0.534668C19.366 0.534668 19.962 0.778516 20.4014 1.21257C20.8408 1.64662 21.0877 2.23532 21.0877 2.84916V19.0506C21.0877 19.6645 20.8408 20.2532 20.4014 20.6872C19.962 21.1213 19.366 21.3651 18.7446 21.3651H2.34307C1.72165 21.3651 1.12568 21.1213 0.68627 20.6872C0.246859 20.2532 0 19.6645 0 19.0506V2.84916C0 2.23532 0.246859 1.64662 0.68627 1.21257C1.12568 0.778516 1.72165 0.534668 2.34307 0.534668H18.7446ZM18.1588 18.472V12.3386C18.1588 11.338 17.7564 10.3784 17.0402 9.67094C16.324 8.96344 15.3525 8.56596 14.3396 8.56596C13.3438 8.56596 12.184 9.16773 11.6216 10.0704V8.78584H8.35306V18.472H11.6216V12.7668C11.6216 11.8757 12.348 11.1466 13.2501 11.1466C13.6851 11.1466 14.1023 11.3173 14.4098 11.6212C14.7174 11.925 14.8902 12.3371 14.8902 12.7668V18.472H18.1588ZM4.54556 6.96896C5.06756 6.96896 5.56817 6.76413 5.93728 6.39953C6.30638 6.03492 6.51375 5.54041 6.51375 5.02479C6.51375 3.94855 5.63509 3.06904 4.54556 3.06904C4.02046 3.06904 3.51687 3.27509 3.14556 3.64186C2.77426 4.00864 2.56567 4.50609 2.56567 5.02479C2.56567 6.10103 3.45603 6.96896 4.54556 6.96896ZM6.174 18.472V8.78584H2.92884V18.472H6.174Z"
								fill="#D1B697"
							/>
						</svg>
					</span>
				</div>
				<span className="absolute tablet:bottom-[-100px] tablet:right-0 desktopxs:bottom-[-82px] desktopxs:right-[45px] laptop:right-[100px] laptop:bottom-0 mobile:bottom-[-85px] mobile:right-0 flex py-[18px] px-[32px] bg-white rounded-[22px]">
					<Image src={AddUser.src} alt="add-user" width={35} height={35} />
				</span>
			</div>
		</section>
	);
}
