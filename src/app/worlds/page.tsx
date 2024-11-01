'use client';

export default function ComponentPage() {

  return (
    <main className="w-full flex justify-center text-white">
      <div className="flex justify-center xl:w-1/2 flex-col bg-dark2 text-xl font-medium">
        <div onClick={() => window.open("/", "_self")} className="p-4 rounded-2xl bg-dark5 hover:bg-dark4 cursor-pointer select-none w-fit mt-4 ml-4">На главную</div>
        <div className="bg-[#FB8F42] flex flex-col md:flex-row justify-center items-center py-4 gap-4 mt-8 mb-8">
          <img src="3.png" />
          <div className="text-6xl md:text-8xl lg:text-9xl font-black">Миры</div>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <div className="">На Золотой роще есть несколько миров, связанных лобби. Некоторые миры имеют синхронизацию инвентарей.</div>
        </div>
        <div className="flex justify-center bg-green-700 text-4xl font-bold my-8 p-4">Основной мир</div>
        <div className="flex flex-col gap-4 px-8">
          <div className="">Мир, где происходят все основные события, строятся проекты и так далее. Именно там расположен главный город.<br />Основной мир имеет генерацию из датапака <span className="font-bold">William Wythers' Overhauled Overworld</span></div>
          <div>Также в основном мире вы сможете найти кучу кастомных структур</div>
        </div>
        <div className="flex justify-center bg-orange-500 text-4xl font-bold my-8 p-4">Лобби</div>
        <div className="flex flex-col gap-4 px-8">
          <div className="bg-yellow-500 border rounded-md border-yellow-500 bg-opacity-20 px-2 w-fit">Возможно устарело или будет отменено</div>
          <div className="">Лобби тоже своего рода мир, в отличии от основного он не обнуляется каждый сезон и имеет ограниченный доступ к редактированию. Здесь находится рынок для обмена предметов на валюту сервера.</div>
        </div>
        <div className="flex justify-center bg-purple-700 text-4xl font-bold my-8 p-4">Лут мир</div>
        <div className="flex flex-col gap-4 px-8">
          <div className="">Лут мир открывается раз в какое-то время с разной тематикой, чаще всего ванилла. Он нужен для возобновления ресурсов, если такое потребуется.</div>
          <div>Он не будет доступен с самого начала и будет запущен тогда, когда это потребуется</div>
        </div>
        <div className="flex justify-center bg-blue-700 text-4xl font-bold my-8 p-4">Ивент сервер</div>
        <div className="flex flex-col gap-4 px-8">
          <div className="">Место для проведения ивентов, таких как: Летающие острова, Ачвики, Стоунблок и так далее.</div>
        </div>
        <div className="flex justify-center bg-gray-500 text-4xl font-bold my-8 p-4">Нада сервер</div>
        <div className="flex flex-col gap-4 px-8 pb-12">
          <div className="">Закрытый сервер для разных микро ивентов</div>
        </div>
      </div>
    </main>
  );
}