import Image from "next/image";
import SecondBlockSVG from "@/public/about/about second block.svg";
import SecondBlockSVG1024 from "@/public/about/about second block1024.svg";

interface SecondBlockProps {
	windowSize: WindowSize;
}

interface WindowSize {
	width: number;
	height: number;
}

const SecondBlock: React.FC<SecondBlockProps> = ({ windowSize }) => {
	const { width, height } = windowSize;
	return (
		<div
			className="bg-white pt-[158px] pb-[108px] 
		desktopxs:pt-[158px] desktopxs:pb-[108px] 
		laptop:pt-[55px] laptop:pb-[50px]
		tablet:pt-[61px] tablet:pb-[42px]
		mobile:pt-[53px] mobile:pb-[42px]
		"
		>
			<div className="flex flex-col items-center">
				<div
					className="text-stone-950
                            text-[54px]
                            font-medium
                            leading-[60px]
                            mb-[40px]
							text-center
							max-w-[1200px]
							desktopxs:mb-[40px]
							laptop:mb-[20px] laptop:max-w-[1200px] laptop:text-[54px] laptop:leading-[60px]
							tablet:mb-[20px] tablet:max-w-[572px] tablet:text-[50px] tablet:leading-[58px]
							mobile:mb-[20px] mobile:text-4xl
							"
				>
					Помогаем громко заявить о себе
				</div>
				<div
					className="text-black
                            text-[22px]
                            font-normal
                            leading-[30px]
							max-w-[1005px]
							desktopxs:max-w-[1005px]
							laptop:max-w-[570px] laptop:text-[22px]
							tablet:max-w-[470px] tablet:text-lg
							mobile:max-w-[300px] mobile:text-base
							text-center
							"
				>
					Наша миссия — показать бизнесменам из стран СНГ короткий путь к
					международному успеху
				</div>
				<div
					className="flex flex-row justify-center items-center mt-[60px]
				desktopxs:w-[1045px]
				laptop:w-[979px]
				desktopxs:justify-center
				laptop:justify-between
				desktopxs:mt-[60px] 
				laptop:mt-[40px] laptop:flex-row
				tablet:flex-col tablet:w-[768px]
				mobile:flex-col
				mobile:w-[375px]
				mobile:mt-[40px]
				"
				>
					<div
						className="flex flex-col max-w-[505px] 
					desktopxs:max-w-[505px] 
					laptop:max-w-[344px] laptop:flex-col laptop:mb-0
					tablet:flex-row tablet:max-w-[710px] tablet:gap-x-5 tablet:mb-[30px]
					mobile:flex-col mobile:mb-[30px] mobile:max-w-[340px]
					
					"
					>
						<div
							className="
						text-[22px]
						leading-[30px]
						desktopxs:text-[22px]
						laptop:text-lg laptop:leading-[30px]
						tablet:text-lg
						mobile:text-base
						"
						>
							<h3
								className="text-stone-950
								font-bold
                                mb-5
                                
								"
							>
								По своему опыту знаем, что для выхода на международный рынок не нужно
								много времени и денег:
							</h3>

							<span
								className="text-stone-950
								 font-normal

							"
							>
								мы
								<span
									className="text-teal-500 font-bold

								"
								>
									{" "}
								</span>
								<span
									className="text-teal-500 font-bold

								"
								>
									закрыли
								</span>
								<span
									className="text-teal-500 font-bold
								"
								>
									{" "}
								</span>
								<span
									className="text-stone-950 font-normal
								"
								>
									первый раунд инвестиций для NOAH всего за 24 часа.
								</span>
							</span>
						</div>
						<div className="flex flex-col">
							<p
								className="
										mt-[40px]
										text-teal-500
										text-[22px]
										font-bold
										leading-[30px]
										desktopxs:text-[22px]
										laptop:text-lg laptop:mt-[24px]
										tablet:mt-[0px] tablet:text-lg
										mobile:text-base mobile:mt-[20px]
										"
							>
								Секрет в быстрой адаптации продукта под нужную аудиторию и грамотно
								выстроенной коммуникации.
								<div className="leading-[75%]">
									<br />
								</div>
								Мы довели эту методику до совершенства и готовы поделиться ей с вами.
							</p>
						</div>
					</div>
					<Image
						src={width > 1024 ? SecondBlockSVG : SecondBlockSVG1024}
						alt=""
						className=""
					/>
				</div>
			</div>
		</div>
	);
};

export default SecondBlock;
