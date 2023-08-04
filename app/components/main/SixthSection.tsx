export default function SixthSection() {
  return (
    <section className="flex flex-col items-center ">
      <h3 className="text-center text-stone-950 laptop:text-[54px] tablet:text-5xl mobile:text-4xl font-medium leading-[60px] mb-[40px] desktopxs:max-w-[850px]  tablet:max-w-[670px] mobile:max-w-[300px]">
        Искусственный интеллект 🤖берётся за дело
      </h3>
      <p className="mb-[80px] text-center text-black text-[22px] font-normal leading-[30px] desktopxs:max-w-[850px]  tablet:max-w-[610px] mobile:max-w-[300px]">
        Когда все креативы готовы, к работе приступает наш технологичный продукт
      </p>
      <div className="grid desktopxs:grid-cols-4 desktopxs:gap-x-[36px] tablet:gap-x-[76px] tablet:gap-y-[30px] tablet:grid-cols-2 ">
        <article className="flex flex-col items-start desktopxs:max-w-[290px] laptop:max-w-[430px] mobile:max-w-[290px] tablet:text-center laptop:text-start">
          <h5 className="text-[40px] font-extrabold w-full tablet:text-center laptop:text-start text-[#19B6B1] mobile:text-center ">
            01.
          </h5>
          <p className="text-stone-950 text-[22px] font-normal leading-[30px] laptop:text-start mobile:text-center">
            На основе портретов ЦА составляет базу контактов, по которой будет
            рассылать приглашения
          </p>
        </article>
        <article className="flex flex-col items-start desktopxs:max-w-[290px] laptop:max-w-[430px] mobile:max-w-[290px] tablet:text-center laptop:text-start">
          <h5 className="text-[40px] font-extrabold w-full tablet:text-center laptop:text-start text-[#E2C89F] mobile:text-center">
            02.
          </h5>
          <p className="text-stone-950 text-[22px] font-normal leading-[30px] laptop:text-start mobile:text-center">
            Проводит A/B тестирование текстов приглашений и выбирает наиболее
            эффективные
          </p>
        </article>
        <article className="flex flex-col items-start desktopxs:max-w-[290px] laptop:max-w-[430px] mobile:max-w-[290px] tablet:text-center laptop:text-start">
          <h5 className="text-[40px] font-extrabold w-full tablet:text-center laptop:text-start text-[#B5B7BA] mobile:text-center">
            03.
          </h5>
          <p className="text-stone-950 text-[22px] font-normal leading-[30px] laptop:text-start mobile:text-center">
            Рассылает до 1500 приглашений в месяц, что до 5 раз больше
            стандартного количества{" "}
          </p>
        </article>
        <article className="flex flex-col items-start desktopxs:max-w-[290px] laptop:max-w-[430px] mobile:max-w-[290px] tablet:text-center laptop:text-start">
          <h5 className="text-[40px] font-extrabold w-full tablet:text-center laptop:text-start text-[#E899B0] mobile:text-center">
            04.
          </h5>
          <p className="text-stone-950 text-[22px] font-normal leading-[30px] laptop:text-start mobile:text-center">
            Закрывает лидов вместо вас с помощью цепочки сообщений и бронирует
            онлайн-встречи в Calendly
          </p>
        </article>
      </div>
    </section>
  );
}
