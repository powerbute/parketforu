'use client';

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function ComponentPage() {
  const [rule1, setRule1] = useState(false);
  const [rule2, setRule2] = useState(false);
  const [rule3, setRule3] = useState(false);
  const [rule4, setRule4] = useState(false);
  const [rule5, setRule5] = useState(false);
  const [rule6, setRule6] = useState(false);
  const [rule7, setRule7] = useState(false);
  const [rule8, setRule8] = useState(false);
  const [rule9, setRule9] = useState(false);
  const [rule10, setRule10] = useState(false);
  const [rule11, setRule11] = useState(false);
  const [rule12, setRule12] = useState(false);

  return (
    <main className="w-full flex justify-center text-white">
      <div className="2xl:w-1/2 bg-dark2 h-screen">
        <div className="flex justify-center flex-col bg-dark2 text-xl font-medium">
          <div onClick={() => window.open("/", "_self")} className="p-4 rounded-2xl bg-dark5 hover:bg-dark4 cursor-pointer select-none w-fit mt-4 ml-4">На главную</div>
          <div className="bg-[#64EC80] flex flex-col md:flex-row justify-center items-center py-4 gap-8 mt-8 mb-8">
            <img src="4.png" />
            <div className="text-6xl md:text-8xl lg:text-9xl font-black">Правила</div>
          </div>
          <div className="flex flex-col gap-4 px-8">
            <div className="text-4xl font-bold">Введение</div>
            <div className="text-lg font-medium flex flex-col gap-2">
              <div>Правила Золотой рощи существуют для обеспечения правопорядка и комфортной игры на сервере.</div>
              <div>Они работают на системе варнов, где желтый это незначительное нарушение, а красный уже серьезное и снять его можно только на суде.</div>
              <div>Когда количество красных варнов превысит три, вы будете забанены на сервере. Помните, что большое количество желтых варнов могут быть превращены в красный варн.</div>
              <div>Не злоупотребляйте, ведите себя хорошо и дружелюбно относитесь к другим — и будет вам счастье</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-8 mt-8">
            <div className="text-4xl font-bold">Олды и новички</div>
            <div className="text-lg font-medium">Некоторые правила могут по разному применены в зависимости от того, сколько вы играете на сервере и как вы влияете на его существование. К новичкам правила всегда строже.</div>
          </div>
          <div className="flex flex-col mt-8 px-8">
            <div className="text-4xl font-bold mb-4">Общие правила</div>
            <div className="flex flex-col border-y py-4 px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule1(!rule1)}>
                <div>Не гриферите, не воруйте, не убивайте игроков</div>
                {!rule1 && <div><FaAngleDown /></div>}
                {rule1 && <div><FaAngleUp /></div>}
              </div>
              {rule1 &&
                <div className="flex flex-col gap-2">
                  <div>Гриферство это:</div>
                  <ul className="list-disc">
                    <li>Поломка блоков на территории другого игрока</li>
                    <li>Убийство мобов, которые находятся в загонах на территории другого игрока</li>
                    <li>Открытие декоративных люков и дверей, которые не предназначены для того, чтобы их открывали</li>
                    <li>Воровство. Когда вы берёте вещи, которые вам не принадлежат</li>
                    <li>Не твоё — не бери. Если в сундуке лежат вещи, и рядом нет таблички о том, что из него можно брать вещи — то брать их нельзя</li>
                    <li>Присвоение вещей умерших игроков</li>
                    <li>Убийство или просто удары, которые сносят прочность у брони, здоровье игрока, или мешают ему</li>
                    <li>Мошенничество и обман. Организация финансовых пирамид</li>
                    <li>Механизмы или скопления энтити, которые специально создают лаги на сервере</li>
                    <li>Отключение спавнрейта, заполнение лимита мобов</li>
                  </ul>
                  <div>Когда это правило можно нарушать</div>
                  <div>Если у пострадавшей стороны нет к вам претензий, то нарушать эти правила можно. Например, можно устраивать PVP поединки, если обе стороны согласны</div>
                  <div>Согласие должно быть задокументировано сообщениями в чате, в Discord, или в виде подписанной книги. Если доказательств согласия нет, тогда игрок может предъявить претензии, и ситуация будет рассматриваться как гриферство</div>
                  <div>НАКАЗАНИЕ</div>
                  <div>От штрафа до бана. За многократное убийство игроков вы получите красный варн</div>
                  <div>За гриферство и воровство в крупных размерах, например подрыв города, выдается моментальный бан</div>
                </div>
              }
            </div>
            <div className="flex flex-col border-b py-4  px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule2(!rule2)}>
                <div>Не засоряйте мир, рубите деревья до конца, не мусорьте блоками</div>
                {!rule2 && <div><FaAngleDown /></div>}
                {rule2 && <div><FaAngleUp /></div>}
              </div>
              {rule2 &&
                <div className="flex flex-col gap-2">
                  <div>Рубите деревья до конца</div>
                  <div><img src="https://plasmorp.com/_next/image?url=%2Fapi%2Fwiki%2Fassets%2Frules%2Ftrash_tree.png&w=640&q=75" /></div>
                  <div>Не используйте блоки для того, чтобы перемещаться, или чтобы забираться на гору</div>
                  <div><img src="https://plasmorp.com/_next/image?url=%2Fapi%2Fwiki%2Fassets%2Frules%2Ftrash_blocks1.png&w=640&q=75" /></div>
                  <div><img src="https://plasmorp.com/_next/image?url=%2Fapi%2Fwiki%2Fassets%2Frules%2Ftrash_blocks2.png&w=640&q=75" /></div>
                  <div>Закрывайте дырки от криперов</div>
                  <div><img src="https://plasmorp.com/_next/image?url=%2Fapi%2Fwiki%2Fassets%2Frules%2Ftrash_creeper.png&w=640&q=75" /></div>
                  <div>Не стройте столбы в один блок, убирайте их за собой</div>
                  <div><img src="https://plasmorp.com/_next/image?url=%2Fapi%2Fwiki%2Fassets%2Frules%2Ftrash_pillar.png&w=640&q=75" /></div>
                  <div>Не добывайте блоки в мире построек. Блоки лучше добывать в мире ферм, чтобы не портить территорию, на которой могут поселиться игроки</div>
                  <div><img src="https://plasmorp.com/_next/image?url=%2Fapi%2Fwiki%2Fassets%2Frules%2Ftrash_mine.png&w=640&q=75" /></div>
                  <div>Не взрывайте территорию. Даже если эта территория принадлежит вам, или никому не принадлежит</div>
                  <div><img src="https://plasmorp.com/_next/image?url=%2Fapi%2Fwiki%2Fassets%2Frules%2Ftrash_tnt.png&w=640&q=75" /></div>
                  <div>Не делайте лавакасты</div>
                  <div><img src="https://plasmorp.com/_next/image?url=%2Fapi%2Fwiki%2Fassets%2Frules%2Ftrash_lava.png&w=640&q=75" /></div>
                  <div>НАКАЗАНИЕ</div>
                  <div>Штраф + убрать, то что сделал. Если вы не уберёте, например огромные лавакасты или взорванную территорию, тогда вы получите бан</div>
                </div>
              }
            </div>
            <div className="flex flex-col border-b py-4  px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule3(!rule3)}>
                <div>Не используйте читы, дюпы и баги, которые можно использовать для разрушения экономики сервера</div>
                {!rule3 && <div><FaAngleDown /></div>}
                {rule3 && <div><FaAngleUp /></div>}
              </div>
              {rule3 &&
                <div className="flex flex-col gap-2">
                  <div>Что такое читы</div>
                  <div>Чит-клиенты, X-Ray, макросы, кликеры, мод на автоматическую рыбалку</div>
                  <div>Исключением являются макросы для команд, например можно назначить команду /sit на кнопку на клавиатуре</div>
                  <div>Нельзя добывать ресурсы через баг с глиной, гравием и лазуритом. Использование этого бага рассматривается как добыча ресурсов через X-Ray</div>
                  <div>Мод Tweakeroo запрещен</div>
                  <div>Поломка бедрока</div>
                  <div>Мод на быструю поломку бедрока запрещен</div>
                  <div>Способ с поломкой бедрока через отключение интернета или модификацию отправки пакетов запрещен</div>
                  <div>Freecam</div>
                  <div>Разрешен мод без функции NoClip. Использование других модов для свободного полёта запрещено</div>
                  <div>Litematica</div>
                  <div>Litematica разрешена, easyPlaceMode запрещен, принтер запрещен</div>
                  <div>Replay Mod и Мини-карта</div>
                  <div>Replay Mod или моды на мини-карту разрешены, но только если вы не используете их для получения преимущества</div>
                  <div>Например, вы можете использовать Replay Mod как доказательство при рассмотрении ситуаций, или чтобы снять видео</div>
                  <div>Но вы не можете использовать его, чтобы искать спавнеры и руды</div>
                  <div>То же самое с картами. Запрещено использовать моды на мини-карту, чтобы искать пещеры и шахты. Запрещено использовать карты, которые показывают энтити или игроков</div>
                  <div>Дюпы</div>
                  <div>Запрещено использовать любые баги сервера или игры для дюпа предметов</div>
                  <div>Нельзя дюпать, в том числе коврики, рельсы и яйца дракона</div>
                  <div>Исключением является баг с дюпом зажжённого динамита, также известный как “Гуси”</div>
                  <div>Автоматическая прогрузка чанков</div>
                  <div>Запрещено строить механизмы, которые прогружают чанки</div>
                  <div>Сид мира</div>
                  <div>Запрещено взламывать, использовать и распространять сид мира</div>
                  <div>НАКАЗАНИЕ</div>
                  <div>От красного варна до бана</div>
                </div>
              }
            </div>
            <div className="flex flex-col border-b py-4  px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule4(!rule4)}>
                <div>Не спамьте и не флудите в чатах, не используйте слова, запрещенные на Twitch, не распространяйте NSFW контент</div>
                {!rule4 && <div><FaAngleDown /></div>}
                {rule4 && <div><FaAngleUp /></div>}
              </div>
              {rule4 &&
                <div className="flex flex-col gap-2">
                  <div>Спам</div>
                  <div>Бессмысленные сообщения, стены из символов, ASCII арты</div>
                  <div>Большие сообщения капсом, или частое использование капса в сообщениях</div>
                  <div>Частая отправка одинаковых объявлений в игровые чаты. Про торговлю, ивенты и тд</div>
                  <div>Отправлять одинаковые рекламные сообщения в чат можно, но с интервалом не менее часа</div>
                  <div>Флуд</div>
                  <div>Повторение одинаковых сообщений много раз, даже 2 раза считается в некоторых случаях</div>
                  <div>Слова запрещенные на Twitch</div>
                  <div>Поскольку на нашем сервере играют стримеры — запрещено использовать слова и фразы запрещенные на Twitch</div>
                  <div>Полный список можно прочитать по ссылке: <div className="cursor-pointer text-blue-500 hover:text-blue-600" onClick={() => window.open("https://digitaldrugs.notion.site/dd5df77c957a499b81635a6feefb8a5b/")}>digitaldrugs.notion.site/dd5df77c957a499b81635a6feefb8a5b</div></div>
                  <div>NSFW контент</div>
                  <div>Не распространяйте NSFW, эротический и шок контент</div>
                  <div>Делать эротические арты на картах можно, но запрещено размещать их в публичных местах, где их могут увидеть стримеры или случайные прохожие. При входе на территорию с эротическими артами должно быть предупреждение</div>
                  <div>НАКАЗАНИЕ</div>
                  <div>От штрафа и мута до бана. Бан выдается если вы намеренно используете запрещенные слова или фразы в присутствии стримера, чтобы попытаться его забанить</div>
                </div>
              }
            </div>
            <div className="flex flex-col border-b py-4  px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule5(!rule5)}>
                <div>Не провоцируйте конфликты и не выводите их за рамки игры</div>
                {!rule5 && <div><FaAngleDown /></div>}
                {rule5 && <div><FaAngleUp /></div>}
              </div>
              {rule5 &&
                <div className="flex flex-col gap-2">
                  <div>Провокация конфликта</div>
                  <div>У конфликта должны быть явные и серьёзные причины. Например, вы имеете полное право оскорбить игрока, который убил вас или своровал у вас что-то. Но если игрок не совершил ничего плохого по отношению к вам, или вашим знакомым, то оскорбления этого игрока будут провокацией конфликта</div>
                  <div>Разжигание конфликта</div>
                  <div>Когда из-за какой-то мелочи, или одного проступка игрока, вы начинаете регулярно и постоянно его оскорблять или провоцировать. Когда вы вспоминаете о том, что было раньше, и регулярно оскорбляете игрока за это</div>
                  <div>Не выводите конфликты за рамки игры. Не переходите на личности, не занимайтесь доксом и откровенной травлей людей, переходя границу игры и реальной жизни</div>
                  <div>Прочее</div>
                  <div>Запрещено продвигать или поощрять идеологии ненависти основанной на расовой, этнической, или религиозной почве. Расизм, нацизм, шовинизм, фашизм, оправдывание войны в Украине, оккупацию территорий и действий ХАМАС, ИГИЛ и других террористических групп</div>
                  <div>Пропаганда наркотиков тоже запрещена. Можно отыгрывать РП с наркотиками, если наркотики будут не настоящими, а выдуманными. Название и внешний вид не должны отсылать к настоящим наркотикам</div>
                  <div>НАКАЗАНИЕ</div>
                  <div>От штрафа до бана. Конфликты это нормально, они случаются. Но если вы постоянно провоцируете и разжигаете конфликты, то вы получите бан.</div>
                </div>
              }
            </div>
            <div className="flex flex-col border-b py-4  px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule6(!rule6)}>
                <div>Не стройте автофермы без разрешения властей</div>
                {!rule6 && <div><FaAngleDown /></div>}
                {rule6 && <div><FaAngleUp /></div>}
              </div>
              {rule6 &&
                <div className="flex flex-col gap-2">
                  <div>Строительство автоферм разрешено только с разрешения властей Золотой рощи</div>
                  <div>Для получения разрешения на строительство автофермы вы должны предоставить ее дизайн, который в ОБЯЗАТЕЛЬНОМ порядке будет включать ее внешнее оформление</div>
                  <div>Ферма ОБЯЗАТЕЛЬНО должна красиво оформлена</div>
                  <div>НАКАЗАНИЕ</div>
                  <div>Снос фермы, ресурсы в казну. Желтый варн, в худшем случае - красный</div>
                </div>
              }
            </div>
            <div className="flex flex-col border-b py-4  px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule7(!rule7)}>
                <div>Не используйте больше одного аккаунта на сервере</div>
                {!rule7 && <div><FaAngleDown /></div>}
                {rule7 && <div><FaAngleUp /></div>}
              </div>
              {rule7 &&
                <div className="flex flex-col gap-2">
                  <div>Помните, что вы отвечаете за действия, которые были совершены с вашего аккаунта.</div>
                  <div>Вы можете иметь только один аккаунт на сервере</div>
                  <div>Возможность иметь более одного аккаунта на сервере есть у администрации, модерации и Правительства Золотой рощи после обоснования</div>
                  <div>НАКАЗАНИЕ</div>
                  <div>Блокировка второго аккаунта. При злоупотреблении, красный варн или временная блокировка основного аккаунта</div>
                </div>
              }
            </div>
            <div className="flex flex-col border-b py-4  px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule8(!rule8)}>
                <div>Не проводите раздачи без разрешения</div>
                {!rule8 && <div><FaAngleDown /></div>}
                {rule8 && <div><FaAngleUp /></div>}
              </div>
              {rule8 &&
                <div className="flex flex-col gap-2">
                  <div>Запрещено проводить или участвовать в раздачах, которые не согласованы с администрацией сервера</div>
                  <div>Чтобы получить разрешение на раздачу — обратитесь к власти Золотой рощи. Во время проведения раздачи администратор должен находиться онлайн, чтобы убедиться в том, что раздаваемые вещи не ворованные</div>
                  <div>Не верьте, что раздача согласована, если об этом говорит не администратор сервера</div>
                  <div>НАКАЗАНИЕ</div>
                  <div>За участие: красный варн + возврат вещей</div>
                  <div>За проведение: если вещи не ворованные — красный варн, иначе — бан</div>
                </div>
              }
            </div>
            <div className="flex flex-col border-b py-4  px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule9(!rule9)}>
                <div>Соблюдайте законы Золотой рощи</div>
                {!rule9 && <div><FaAngleDown /></div>}
                {rule9 && <div><FaAngleUp /></div>}
              </div>
              {rule9 &&
                <div className="flex flex-col gap-2">
                  <div>Правительство Золотой рощи устанавливает законы, действующие на всей территории сервера</div>
                  <div>Помните, что незнание законов не освобождает от отвественности</div>
                  <div>Если вы считаете выданное наказание или закон несправедливым, вы можете обратиться в Верховный суд Золотой рощи</div>
                  <div>НАКАЗАНИЕ</div>
                  <div>Соответствующее закону</div>
                </div>
              }
            </div>
            <div className="flex flex-col border-b py-4  px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule10(!rule10)}>
                <div>Принципы Золотой рощи</div>
                {!rule10 && <div><FaAngleDown /></div>}
                {rule10 && <div><FaAngleUp /></div>}
              </div>
              {rule10 &&
                <div className="flex flex-col gap-2">
                  <div>Главные принципы</div>
                  <div>Мы являемся одним большим дружным коллективом, не устраивайте конфликты по пустякам и старайтесь быть дружелюбными ко всем участникам коммьюнити</div>
                  <div>Мы - один большой город. Занять территорию и быть одиночкой у нас не представляется возможным. Несмотря на такие провозглашение независимости от Правительства, законы Золотой рощи, указы Правительства и так далее продолжают действовать на всей территории сервера</div>
                  <div>Мы строим большие проекты, если вы можете как-то нам помочь, мы будем рады вашей помощи. Если вам надо помочь с проектом, обращайтесь и мы сделаем все возможное, чтобы сделать ваши идеи возможными</div>
                  <div>Мы проводим РП ивенты и у нас есть основной сюжет, мы будем рады, если вы дополните его своей крутой идеей. Однако, мы просим вас не портить и не мешать его проведению</div>
                  <div>Не пытайтесь нарушить наши главные принципы.</div>
                  <div>НАКАЗАНИЕ</div>
                  <div>На усмотрение администрации</div>
                </div>
              }
            </div>
            <div className="flex flex-col border-b py-4  px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule11(!rule11)}>
                <div>Валюта сервера — рубины</div>
                {!rule11 && <div><FaAngleDown /></div>}
                {rule11 && <div><FaAngleUp /></div>}
              </div>
              {rule11 &&
                <div className="flex flex-col gap-2">
                  <div>Запрещается обменивать валюту сервера на реальные деньги. Предоставление услуг в реальной жизни за валюту сервера разрешено</div>
                  <div>НАКАЗАНИЕ</div>
                  <div>На усмотрение администрации</div>
                </div>
              }
            </div>
            <div className="flex flex-col border-b py-4  px-2 border-dark3 gap-8">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setRule12(!rule12)}>
                <div>Соблюдение законов ЕС и запрещенный контент</div>
                {!rule12 && <div><FaAngleDown /></div>}
                {rule12 && <div><FaAngleUp /></div>}
              </div>
              {rule12 &&
                <div className="flex flex-col gap-2">
                  <div>Золотая роща находится под юрисдикцией Европейского Союза, поэтому просим не делать того, что запрещено законодательством ЕС</div>
                  <div>Мы в меру своих сил удаляем и предотвращаем распространение запрещенного контента</div>
                  <div>Однако, мы не занимаемся ограничение свободы слова и мысли, пока это не переходит рамки. Например, оправдание насилия, пропаганда религии, поддержка политических движений, основанных на ненависти и/или принижении по определенному признаку</div>
                  <div>Страны, чьи запросы мы игнорируем:</div>
                  <ul className="list-disc">
                    <li>Российская Федерация</li>
                    <li>Иран</li>
                    <li>КНДР</li>
                    <li>Палестина (непризнанное государство)</li>
                    <li>Беларусь</li>
                    <li>Сирия</li>
                    <li>Ирак</li>
                    <li>Йемен</li>
                    <li>Афганистан</li>
                  </ul>
                  <div>НАКАЗАНИЕ</div>
                  <div>На усмотрение администрации</div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}