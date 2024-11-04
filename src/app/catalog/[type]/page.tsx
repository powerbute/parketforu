'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';
import Button from '@/components/Button';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// тем чек тг
import { IoMdMail, IoMdWarning } from "react-icons/io";
import { FaBook, FaShoppingCart, FaSortAlphaDown } from 'react-icons/fa';
import { FaClock, FaGlasses, FaLocationDot, FaPhone, FaTree, FaTruck } from 'react-icons/fa6';
import { MdDiscount } from "react-icons/md";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function HomePage({ params }: { params: { type: any } }) {
  const [openFilter, setOpenFilter] = React.useState(false);
  const filters = [
    { name: "Цена", vars: [{ key: "price1", name: "от 2000 до 5000" }, { key: "price2", name: "дороже 5000" }], open: true },
    { name: "Бренды", vars: [{ key: "brand1", name: "AlixFloor" }, { key: "brand2", name: "Amberwood" }, { key: "brand3", name: "Baltic Wood" }, { key: "brand4", name: "Barlinek" }, { key: "brand5", name: "Bauwerk" }, { key: "brand6", name: "BRINEL" }, { key: "brand7", name: "City Deco" }, { key: "brand8", name: "ESSE" }, { key: "brand9", name: "Esta Parket" },], open: false },
    { name: "Цвет", vars: [{ key: "color1", name: "белый" }, { key: "color2", name: "серый" }, { key: "color3", name: "черный" }], open: true },
    { name: "Порода дерева", vars: [{ key: "poroda1", name: "Американский орех" }, { key: "poroda2", name: "Береза" }, { key: "poroda3", name: "Береза желтая" }, { key: "poroda4", name: "Бук" }], open: true },
    { name: "Ширина", vars: [{ key: "x1", name: "0 мм" }], open: false },
    { name: "Длина", vars: [{ key: "z1", name: "0 мм" }], open: false },
    { name: "Высота", vars: [{ key: "y1", name: "0 мм" }], open: false },
    { name: "Толщина верхнего слоя", vars: [{ key: "l1", name: "0 мм" }], open: false },
    { name: "Сортировка", vars: [{ key: "sort1", name: "Calm" }, { key: "sort2", name: "Country" }, { key: "sort3", name: "Dynamic" }], open: true },
    { name: "Покрытие", vars: [{ key: "v1", name: "UV-лак" }, { key: "v2", name: "Лак" }, { key: "v3", name: "Лак глянцевый" }], open: true },
    { name: "Страна", vars: [{ key: "country1", name: "США" }, { key: "country2", name: "Германия" }, { key: "country3", name: "Россия" }, { key: "country4", name: "Польша" }], open: false },
    { name: "Декоративная обработка", vars: [{ key: "decor1", name: "Браширование" }, { key: "decor2", name: "Копчение" }, { key: "decor3", name: "Состаривание" }], open: false },
    { name: "Тип дизайна", vars: [{ key: "design1", name: "Однополосный" }, { key: "design2", name: "Двухполосный" }, { key: "design3", name: "Трехполосный" }, { key: "design4", name: "Французская ёлка" }, { key: "design5", name: "Голландский узор" }, { key: "design6", name: "2-х слойный (замок)" }, { key: "design7", name: "Английская ёлка" }, { key: "design8", name: "Классическая ёлка" }], open: false },
    { name: "Фаска", vars: [{ key: "f1", name: "Без фаски" }, { key: "f2", name: "Микрофаска с 4-х сторон" }, { key: "f3", name: "Фаска с 2-х сторон" }, { key: "f4", name: "Фаска с 4-х сторон" }], open: true },
    { name: "Коллекция", vars: [{ key: "col1", name: "American Collection" }, { key: "col2", name: "April" }, { key: "col3", name: "Artisan" }], open: false },
    { name: "Класс пожарной безопаности", vars: [{ key: "bez1", name: "КМ2" }, { key: "bez2", name: "КМ3" }, { key: "bez3", name: "КМ5" }], open: true }
  ];

  function numberWithSpaces(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function getNameByType() {
    if (params.type == 1) return "Паркетная доска";
    if (params.type == 2) return "Инженерная доска";
    if (params.type == 3) return "Паркет ёлочка";
    if (params.type == 4) return "Массивная доска";
    if (params.type == 5) return "Деревянные стеновые панели";
    if (params.type == 6) return "Модульный паркет";
    if (params.type == 7) return "Ламинат";
    if (params.type == 8) return "Виниловый пол";
    if (params.type == 9) return "Террасная доска";
    if (params.type == 10) return "Геометрический паркет";
    if (params.type == 11) return "Штучный паркет";
    if (params.type == 12) return "Сопутствующие товары";
  }

  return (
    <main>
      <div className='flex flex-col bg-white h-screen'>
        <div className='px-4 lg:px-24 py-4 bg-dark text-white flex flex-col gap-2 md:flex-row justify-between'>
          <div onClick={() => window.open("/", "_self")} className='text-5xl font-black cursor-pointer'>ParketForU</div>
          <div className='flex items-center gap-2'>
            <div onClick={() => window.open("/catalog", "_self")} className='bg-green-600 font-semibold hover:bg-green-700 cursor-pointer select-none px-4 py-2 rounded-2xl flex items-center gap-2'>
              <FaBook />
              <div>Каталог</div>
            </div>
            <div onClick={() => window.open("/cart", "_self")} className='bg-stone-800 font-semibold hover:bg-stone-900 cursor-pointer select-none px-4 py-2 rounded-2xl flex items-center gap-2'>
              <FaShoppingCart />
              <div>1</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='px-4 lg:px-72 pt-6 text-4xl font-bold'>{getNameByType()}</div>
          <div className='px-4 lg:px-72 pt-2 2xl:hidden'>
            <div onClick={() => setOpenFilter(!openFilter)} className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Фильтр подбора</div>
          </div>
          <div className='flex flex-col 2xl:grid 2xl:grid-cols-8 gap-4 px-4 lg:px-72 py-4 2xl:py-6'>
            {openFilter &&
              <div className='flex flex-col gap-4 p-4 rounded-2xl bg-yellow-100'>
                <div className='flex flex-col gap-2'>
                  <div className='text-2xl font-bold'>Фильтр подбора</div>
                  <div className='flex gap-2'>
                    <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Применить</div>
                    <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Сброс</div>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  {filters?.map((e: any) =>
                    <Filter key={e?.name + "filter"} props={e} />
                  )}
                </div>
                <div className='flex gap-2'>
                  <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Применить</div>
                  <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Сброс</div>
                </div>
              </div>
            }
            <div className='hidden 2xl:flex col-span-2 flex-col gap-4 p-4 rounded-2xl bg-yellow-100'>
              <div className='flex flex-col gap-2'>
                <div className='text-2xl font-bold'>Фильтр подбора</div>
                <div className='flex gap-2'>
                  <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Применить</div>
                  <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Сброс</div>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                {filters?.map((e: any) =>
                  <Filter key={e?.name + "filter"} props={e} />
                )}
              </div>
              <div className='flex gap-2'>
                <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Применить</div>
                <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Сброс</div>
              </div>
            </div>
            <div className='flex col-span-6 flex-col gap-4'>
              <div className='grid grid-cols-2 xl:grid-cols-4'>
                <div onClick={() => window.open("/product/1", "_self")} className="flex flex-col gap-2 p-4 hover:bg-gray-100 cursor-pointer rounded-2xl">
                  <img width={300} src='/parkets/1.jpeg' className='rounded-lg' />
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                      <div className='text-lg font-bold'>1000₽/м2</div>
                      <div className='text-lg'>Паркетная доска Виви 15х155х500-1450 Кантри</div>
                    </div>
                    <div className='text-xs flex flex-col text-gray-400'>
                      <div>500-1450 x 155 x 15 мм</div>
                      <div>Модель: 91-402</div>
                    </div>
                    <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Купить</div>
                  </div>
                </div>
                <div onClick={() => window.open("/product/1", "_self")} className="flex flex-col gap-2 p-4 hover:bg-gray-100 cursor-pointer rounded-2xl">
                  <img width={300} src='/parkets/1.jpeg' className='rounded-lg' />
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                      <div className='text-lg font-bold'>1000₽/м2</div>
                      <div className='text-lg'>Паркетная доска Виви 15х155х500-1450 Кантри</div>
                    </div>
                    <div className='text-xs flex flex-col text-gray-400'>
                      <div>500-1450 x 155 x 15 мм</div>
                      <div>Модель: 91-402</div>
                    </div>
                    <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Купить</div>
                  </div>
                </div>
                <div onClick={() => window.open("/product/1", "_self")} className="flex flex-col gap-2 p-4 hover:bg-gray-100 cursor-pointer rounded-2xl">
                  <img width={300} src='/parkets/1.jpeg' className='rounded-lg' />
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                      <div className='text-lg font-bold'>1000₽/м2</div>
                      <div className='text-lg'>Паркетная доска Виви 15х155х500-1450 Кантри</div>
                    </div>
                    <div className='text-xs flex flex-col text-gray-400'>
                      <div>500-1450 x 155 x 15 мм</div>
                      <div>Модель: 91-402</div>
                    </div>
                    <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Купить</div>
                  </div>
                </div>
                <div onClick={() => window.open("/product/1", "_self")} className="flex flex-col gap-2 p-4 hover:bg-gray-100 cursor-pointer rounded-2xl">
                  <img width={300} src='/parkets/1.jpeg' className='rounded-lg' />
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                      <div className='text-lg font-bold'>1000₽/м2</div>
                      <div className='text-lg'>Паркетная доска Виви 15х155х500-1450 Кантри</div>
                    </div>
                    <div className='text-xs flex flex-col text-gray-400'>
                      <div>500-1450 x 155 x 15 мм</div>
                      <div>Модель: 91-402</div>
                    </div>
                    <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Купить</div>
                  </div>
                </div>
                <div onClick={() => window.open("/product/1", "_self")} className="flex flex-col gap-2 p-4 hover:bg-gray-100 cursor-pointer rounded-2xl">
                  <img width={300} src='/parkets/1.jpeg' className='rounded-lg' />
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                      <div className='text-lg font-bold'>1000₽/м2</div>
                      <div className='text-lg'>Паркетная доска Виви 15х155х500-1450 Кантри</div>
                    </div>
                    <div className='text-xs flex flex-col text-gray-400'>
                      <div>500-1450 x 155 x 15 мм</div>
                      <div>Модель: 91-402</div>
                    </div>
                    <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Купить</div>
                  </div>
                </div>
                <div onClick={() => window.open("/product/1", "_self")} className="flex flex-col gap-2 p-4 hover:bg-gray-100 cursor-pointer rounded-2xl">
                  <img width={300} src='/parkets/1.jpeg' className='rounded-lg' />
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                      <div className='text-lg font-bold'>1000₽/м2</div>
                      <div className='text-lg'>Паркетная доска Виви 15х155х500-1450 Кантри</div>
                    </div>
                    <div className='text-xs flex flex-col text-gray-400'>
                      <div>500-1450 x 155 x 15 мм</div>
                      <div>Модель: 91-402</div>
                    </div>
                    <div className='bg-green-600 text-white w-fit font-semibold hover:bg-green-700 cursor-pointer select-none px-6 py-2 rounded-2xl flex items-center gap-2'>Купить</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 px-4 lg:px-72 py-6 bg-stone-950 text-white'>
            <div className='text-2xl md:text-4xl font-bold'>Закажите достойное напольное покрытие</div>
            <div className='text-lg md:text-2xl font-medium'>Подборка паркета для вашего интерьера</div>
            <div className='flex flex-col md:flex-row items-end gap-4'>
              <div className='text-2xl md:text-4xl font-bold'>+7 (800) 555-35-35</div>
              <div>Пн-Пт 10:00 - 20:00</div>
              <div>Сб-Вс 11:00 - 19:00</div>
            </div>
          </div>
          <div className='flex flex-col gap-8 px-4 lg:px-72 py-6 bg-stone-900 text-white mt-4'>
            <div className='flex flex-col lg:flex-row gap-12'>
              <div className='flex flex-col'>
                <div className='text-3xl font-bold'>ParketForU</div>
                <div className='text-lg font-medium'>Паркет по Москве и области</div>
              </div>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col lg:flex-row text-center lg:text-start items-center gap-2'>
                  <FaLocationDot size={28} />
                  <div className='text-xl font-medium'>г. Москва, ул. Пушкина, дом Колотушкино</div>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-2'>
                  <FaPhone size={28} />
                  <div className='text-xl font-medium'>+7 (800) 555-35-35</div>
                  <div className='text-xl font-medium'>+7 (495) 000-33-01</div>
                  <div className='text-xl font-medium text-stone-500'>sales@parketforu.com</div>
                </div>
              </div>
            </div>
            <div className='flex gap-2 justify-between'>
              <div>ООО "Паркет Фор Ю" © 2024</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Filter({ props }: { props: { name: any, vars: any, open: any } }) {
  const [open, setOpen] = React.useState(props.open);
  return (
    <div className='flex flex-col gap-1 select-none'>
      <div onClick={() => setOpen(!open)} className='text-lg font-semibold flex items-center justify-between'>{props.name}
        {open ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      {open &&
        <div className='max-h-48 overflow-y-auto'>
          {props.vars?.map((e: any) =>
            <FilterOption props={{ name: e?.name, key: e?.key, filter: props.name }} />
          )}
        </div>
      }
    </div>
  )
}

function FilterOption({ props }: { props: { name: any, key: any, filter: any } }) {
  const [select, setSelect] = React.useState(false);
  return (
    <div onClick={() => setSelect(!select)} key={props.filter + "FILTER_" + props.key} className='flex items-center gap-2 cursor-pointer'>
      {select == true && <div className='w-4 h-4 rounded-md bg-green-500'></div>}
      {select == false && <div className='w-4 h-4 rounded-md bg-gray-200'></div>}
      <div>{props.name}</div>
    </div>
  )
}
