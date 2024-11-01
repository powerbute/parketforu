'use client';

export default function ComponentPage() {

  return (
    <main className="w-full flex justify-center text-white">
      <div className="2xl:w-1/2 bg-dark2 h-screen">
        <div className="flex justify-center flex-col bg-dark2 text-xl font-medium">
          <div onClick={() => window.open("/", "_self")} className="p-4 rounded-2xl bg-dark5 hover:bg-dark4 cursor-pointer select-none w-fit mt-4 ml-4">На главную</div>
          <div className="bg-[#FB4B42] flex flex-col md:flex-row justify-center items-center py-4 gap-8 mt-8 mb-8">
            <img src="1.png" />
            <div className="text-6xl md:text-8xl lg:text-9xl font-black">Экономика</div>
          </div>
          <div className="flex flex-col gap-4 px-8">
            <div className="text-4xl font-bold">Введение</div>
            <div className="text-lg font-medium">Экономика Золотой рощи основана на новом для Minecraft предмете: рубине. Рубиновый руды не существует и вам требуется добывать рубины иными путями. Он используется во всех областях экономики и является неотъемлемой частью опыта Золотой рощи</div>
          </div>
          <div className="flex flex-col gap-4 px-8 mt-8">
            <div className="text-4xl font-bold">Как заработать рубины</div>
            <div className="text-lg font-medium">В шахте вы их накопать не можете, однако существует множество других способов стать богаче:
              <ul>
                <li>• Продажа предметов на рынке Золотой рощи внутриигровым персонажам</li>
                <li> • Торговля с другими игроками и аукционы.</li>
                <li>• Находите в лут сундуках в структурах миров.</li>
                <li> • Выполняйте достижения.</li>
                <li>• Выполняйте ежедневные задания от Джека, помогайте в добыче ресурсов на проекты.</li>
                <li>• Уничтожайте боссов, таких как Эндер Дракон и Визер.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-8 mt-8">
            <div className="text-4xl font-bold">Рынок</div>
            <div className="text-lg font-medium flex gap-2 flex-col">
              <div>Рынок, где можно обменять предметы на рубины, а также купить за рубины отсутствующие вещи будет находиться в порту</div>
              <div>Количество жителей, а также предметы, которые они будут продавать будет зависеть от уровня развития порта на котором они находятся</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}