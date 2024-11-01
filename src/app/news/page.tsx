'use client';

export default function ComponentPage() {

  return (
    <main className="w-full flex justify-center text-white">
      <div className="flex justify-center xl:w-1/2 flex-col bg-dark2 text-xl font-medium">
        <div onClick={() => window.open("/", "_self")} className="p-4 rounded-2xl bg-dark5 hover:bg-dark4 cursor-pointer select-none w-fit mt-4 ml-4">На главную</div>
        <div className="bg-[gold] flex flex-col md:flex-row justify-center items-center py-4 gap-4 mt-8 mb-8">
          <div className="text-6xl md:text-8xl lg:text-9xl font-black">Новости</div>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <div className="flex flex-col gap-2">
            <div className="text-4xl font-bold">Открыт анонс-сайт Золотой рощи</div>
            <div className="flex flex-col gap-2">Стал доступен анонс-сайт Золотой рощи goldcopse.vercel.app</div>
            <div className="text-sm text-dark3">25.09.2024 19:00</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-4xl font-bold">Анонсирован данж «Кузница»</div>
            <div className="flex flex-col gap-2">
              <div>Новое подземелье, которое можно найти в различных частях мира, вдохновленное старой заброшенной кузницей. Предназначено для игры в середине игры с алмазной броней, сражайтесь в разных комнатах, чтобы получить отличную добычу! Спавнеры изменены, чтобы быть разными каждый раз, когда вы входите в новую кузницу</div>
              <div>Данж имеет много разных комнат, некоторые даже могут быть недоступны из-за количество данжей в мире</div>
              <div>Известно как минимум об одном данже, однако в планах, чтобы их было больше</div>
              <div>До конца неизвестно, будет ли точно этот данж на сервере или Mojang снова что-то заруинят</div>
              <div>Ссылка на видео: https://www.youtube.com/watch?v=IyfUKEvxLpY</div>
              <div><iframe className="w-full h-96" src="https://www.youtube.com/embed/IyfUKEvxLpY" title="Первый трейлер данжа Кузница | Золотая роща" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
            </div>
            <div className="text-sm text-dark3">25.09.2024 19:00</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-4xl font-bold"></div>
            <div className="flex flex-col gap-2"></div>
            <div className="text-sm text-dark3"></div>
          </div>
        </div>
      </div>
    </main >
  );
}