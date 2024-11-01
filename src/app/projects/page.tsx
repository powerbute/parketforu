'use client';

export default function ComponentPage() {

  return (
    <main className="w-full flex justify-center text-white">
      <div className="flex justify-center xl:w-1/2 flex-col bg-dark2 text-xl font-medium">
        <div onClick={() => window.open("/", "_self")} className="p-4 rounded-2xl bg-dark5 hover:bg-dark4 cursor-pointer select-none w-fit mt-4 ml-4">На главную</div>
        <div className="bg-[#FCD730] flex flex-col md:flex-row justify-center items-center py-4 gap-4 mt-8 mb-8">
          <img src="2.png" />
          <div className="text-6xl md:text-8xl lg:text-9xl font-black">Проекты</div>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <div className="text-4xl font-bold">Введение</div>
          <div className="text-lg font-medium">На новом проекте мы решили сосредоточится на проектах и сюжетах. Мы решили поделить проекты на несколько категорий: лобби проекты, легкие проекты, средние проекты, сложные проекты. Также мы ввели мейнстрим идеи, это не какой-то единичный проект, а целая коллекция, а также идея от которой мы будем создавать еще больше идей для проектов</div>
          <div className="text-4xl font-bold mt-8">Текущий статус</div>
          <div className="text-lg font-medium">На данный момент открыт набор идей для проектов.
            Текущая цель — чтобы каждый игрок обзавелся своим проектом к открытию.</div>
          <div className="text-4xl font-bold mt-8">Статус Лобби проектов</div>
          <div className="text-lg font-medium">Все лобби проекты в случае отсутствия лобби будут перенесены в другие категории и построены в основном мире.</div>
          <div className="text-4xl font-bold mt-8">📌Мейнстрим идеи</div>
          <div className="text-lg font-medium">
            <ul>
              <li>— Религия птиц</li>
              <li>— ...</li>
            </ul>
          </div>
          <div className="text-4xl font-bold mt-8">🔖Лобби проекты</div>
          <div className="text-lg font-medium">
            <div className="bg-yellow-500 border rounded-md border-yellow-500 bg-opacity-20 px-2 w-fit">Если лобби не будет, то они будут перенесены в основной мир и распределены по категориям</div>
            <ul>
              <li>— Аукцион</li>
              <li>— Торговая площадь</li>
              <li>— Музей артефактов</li>
              <li>— Бар</li>
              <li>— Банк</li>
              <li>— ...</li>
            </ul>
          </div>
          <div className="text-4xl font-bold mt-8">🥉Легкие проекты</div>
          <div className="text-lg font-medium">
            <ul>
              <li>— Кафешка от Мияки (пока без названия)</li>
              <li>— ...</li>
            </ul>
          </div>
          <div className="text-4xl font-bold mt-8">🥈Средние проекты</div>
          <div className="text-lg font-medium">
            <ul>
              <li>— Лаборатория «Альфа»</li>
              <li>— Учебное заведение (пока без названия)</li>
              <li>— Музей артефактов</li>
              <li>— Японская забегаловка (мафия)</li>
              <li>— ...</li>
            </ul>
          </div>
          <div className="text-4xl font-bold mt-8">🥇 Сложные проекты</div>
          <div className="text-lg font-medium pb-12">
            <ul>
              <li>— Бизнес центр</li>
              <li>— Башни-близнецы (ивент)</li>
              <li>— Гильдия авантюристов</li>
              <li>— ...</li>
            </ul>
          </div>
        </div>
      </div>
    </main >
  );
}