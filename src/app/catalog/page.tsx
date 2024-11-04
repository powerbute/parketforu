'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

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
          <div className='px-4 lg:px-72 pt-6 text-4xl font-bold'>Каталог</div>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 text-white px-4 lg:px-72 py-6'>
            <div onClick={() => window.open("/catalog/1", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/1.jpeg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Паркетная доска</div>
            </div>
            <div onClick={() => window.open("/catalog/2", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/2.jpeg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Инженерная доска</div>
            </div>
            <div onClick={() => window.open("/catalog/3", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/3.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Паркет ёлочка</div>
            </div>
            <div onClick={() => window.open("/catalog/4", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/4.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Массивная доска</div>
            </div>
            <div onClick={() => window.open("/catalog/5", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/5.jpeg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Деревянные стеновые панели</div>
            </div>
            <div onClick={() => window.open("/catalog/6", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/6.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Модульный паркет</div>
            </div>
            <div onClick={() => window.open("/catalog/7", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/7.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Ламинат</div>
            </div>
            <div onClick={() => window.open("/catalog/8", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/8.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Виниловый пол</div>
            </div>
            <div onClick={() => window.open("/catalog/9", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/9.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Террасная доска</div>
            </div>
            <div onClick={() => window.open("/catalog/10", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/10.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Геометрический паркет</div>
            </div>
            <div onClick={() => window.open("/catalog/11", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/11.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Штучный паркет</div>
            </div>
            <div onClick={() => window.open("/catalog/12", "_self")} className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/12.png' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Сопутствующие товары</div>
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
