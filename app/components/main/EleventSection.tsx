import Stars from "@/public/pictures/main/elevenSection/stars.svg";
import Lines from "@/public/pictures/main/elevenSection/lines.svg";
import Image from "next/image";

export default function EleventSection() {
	return (
		<section className="w-full flex flex-col items-center bg-[#0E0F0F] relative py-[50px]">
			<Image
				src={Stars.src}
				alt="start"
				width={300}
				height={300}
				className="absolute top-0 left-0 laptop:w-[150px] laptop:h-[150px] tablet:w-[120px] tablet:h-[120px] mobile:w-[70px] mobile:h-[70px]"
			/>
			<div className="max-w-[262px] grid grid-cols-5 gap-[24px] relative z-10 desktopxs:mb-[52px] mobile:mb-[30px]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="34"
					height="35"
					viewBox="0 0 34 35"
					fill="none"
				>
					<path
						d="M33.7006 17.4136C22.5122 20.5028 20.0083 23.008 16.9192 34.1956C13.829 23.008 11.3251 20.504 0.136719 17.4136C11.3251 14.3244 13.829 11.8204 16.9181 0.631714C20.0072 11.8204 22.5122 14.3244 33.6994 17.4136H33.7006Z"
						fill="#C8CCD1"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="34"
					height="35"
					viewBox="0 0 34 35"
					fill="none"
				>
					<path
						d="M16.9934 8.5907L22.1786 0.631714L21.9246 10.2759L30.5693 7.04207L24.9736 14.6877L33.7748 17.4142L24.9736 20.1396L30.5693 27.7852L21.9246 24.5514L22.1786 34.1956L16.9934 26.2366L11.8071 34.1956L12.0611 24.5514L3.41644 27.7852L9.01215 20.1396L0.210938 17.4142L9.01215 14.6877L3.41644 7.04207L12.0611 10.2759L11.8071 0.631714L16.9934 8.5907Z"
						fill="#E2C89F"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="34"
					height="35"
					viewBox="0 0 34 35"
					fill="none"
				>
					<path
						d="M17.6062 2.45581H16.8977C8.93311 2.45581 2.47656 8.91236 2.47656 16.8769V17.5855C2.47656 25.55 8.93311 32.0066 16.8977 32.0066H17.6062C25.5708 32.0066 32.0273 25.55 32.0273 17.5855V16.8769C32.0273 8.91236 25.5708 2.45581 17.6062 2.45581Z"
						fill="#19B6B1"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="34"
					height="35"
					viewBox="0 0 34 35"
					fill="none"
				>
					<path
						d="M33.9252 15.8207H20.9909L30.1372 6.67439L27.8839 4.4197L18.7376 13.5674V0.631714H15.5503V13.5674L6.404 4.4197L4.14931 6.67439L13.297 15.8207H0.361328V19.008H13.297L4.14931 28.1543L6.404 30.4076L15.5503 21.2613V34.1956H18.7376V21.2613L27.8839 30.4076L30.1372 28.1543L20.9909 19.008H33.9252V15.8207Z"
						fill="#E899B0"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="34"
					height="35"
					viewBox="0 0 34 35"
					fill="none"
				>
					<path
						d="M28.4484 17.596C35.8701 27.8943 27.5629 36.243 17.3158 28.7842C7.0687 36.243 -1.23852 27.8943 6.18321 17.596C-1.23852 7.29777 7.0687 -1.05093 17.3158 6.40786C27.5629 -1.05093 35.8701 7.29777 28.4484 17.596Z"
						fill="#C8CCD1"
					/>
				</svg>
			</div>
			<h3 className="laptop:max-w-[1006px] text-center text-white desktopxs:text-[54px] laptop:text-[44px] mobile:text-[26px] font-medium laptop:leading-[60px] mb-[30px] tablet:max-w-[587px] tablet:text-3xl tablet:mt-[30px] mobile:leading-[34px]">
				Мы можем убрать лишнее, объединить несколько тарифов в один или добавить
				дополнительные услуги
			</h3>
			<p className="max-w-[826px] text-center text-white laptop:text-[22px] mobile:text-base font-normal leading-[30px] desktopxs:mb-[60px] laptop:mb-[40px] tablet:text-base tablet:max-w-[474px] tablet:mb-[30px] mobile:mb-[30px]">
				Запишитесь на бесплатную консультацию, и мы расскажем, какая стратегия
				продвижения подойдёт вам и вашему бизнесу
			</p>
			<button className="px-[53px] py-[15px] text-white text-base font-bold leading-7 bg-teal-500 rounded-[5px] ">
				Забронировать консультацию
			</button>
			<Image
				src={Lines.src}
				alt="start"
				width={300}
				height={300}
				className="absolute bottom-0 right-0 laptop:w-[150px] laptop:h-[150px] tablet:w-[120px] tablet:h-[120px] mobile:w-[70px] mobile:h-[70px]"
			/>
		</section>
	);
}
