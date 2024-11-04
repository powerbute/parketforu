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

export default function HomePage() {

  function numberWithSpaces(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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
          <div className='grid grid-cols-6 gap-8 px-4 lg:px-72 py-6'>
            <div className='col-span-2 flex flex-col gap-2'>
              <img src='/parkets/1.jpeg' className='rounded-2xl' />
              <div className='pl-3 text-gray-400'>
                <div>Мы не рекомендуем выбирать паркет по фото</div>
                <div>Минимальный заказ 10м2 или 50 000р</div>
              </div>
            </div>
            <div className='flex flex-col col-span-4 gap-4'>
              <div className='text-4xl'>Паркетная доска Виви 15х155х500-1450 Кантри Русский Дуб</div>
              <div className='text-6xl font-black'>1000₽/м2</div>
              <div className='flex gap-2'>
                <div className='bg-green-600 text-white font-bold hover:bg-green-700 cursor-pointer select-none px-4 py-4 rounded-2xl flex items-center gap-2 text-4xl'>
                  <div>Купить</div>
                </div>
              </div>
              <div className='bg-yellow-100/40 p-4 flex flex-col gap-4'>
                <div className='text-2xl font-bold'>Характеристики</div>
                <div className='grid grid-cols-2 gap-2'>
                  <div className='font-bold'>Модель</div>
                  <div>91-402</div>
                  <div className='font-bold'>Порода дерева</div>
                  <div>Дуб</div>
                  <div className='font-bold'>Покрытие</div>
                  <div>Масло с твердым воском</div>
                  <div className='font-bold'>Особые параметры</div>
                  <div>Заказная позиция</div>
                  <div className='font-bold'>Коллекция</div>
                  <div>Озера</div>
                  <div className='font-bold'>Толщина верхнего слоя</div>
                  <div>3 мм</div>
                  <div className='font-bold'>Тип дизайна</div>
                  <div>2-х слойный (замок)</div>
                  <div className='font-bold'>Цвет</div>
                  <div>Коричневый</div>
                  <div className='font-bold'>Соединение</div>
                  <div>Замок</div>
                  <div className='font-bold'>Ширина</div>
                  <div>135мм, 155мм</div>
                  <div className='font-bold'>Длина</div>
                  <div>от 500мм до 1450-1950мм</div>
                  <div className='font-bold'>Толщина (в скобках толщина ценной породы)</div>
                  <div>15(3)мм, 16(4)мм</div>
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