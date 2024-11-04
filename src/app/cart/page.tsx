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
import { FaClock, FaGlasses, FaLocationDot, FaPhone, FaTrash, FaTree, FaTruck } from 'react-icons/fa6';
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
          <div className='px-4 lg:px-72 pt-6 text-4xl font-bold'>Корзина</div>
          <div className='px-4 lg:px-72 py-6 flex flex-col gap-2'>
            <div onClick={() => window.open("/product/1", "_self")} className="flex gap-2 p-4 hover:bg-gray-100 cursor-pointer rounded-2xl">
              <img width={100} src='/parkets/1.jpeg' className='rounded-lg' />
              <div className='flex gap-2 justify-between w-full'>
                <div className='flex flex-col'>
                  <div className='text-lg'>Паркетная доска Виви 15х155х500-1450 Кантри</div>
                  <div className='text-lg font-bold'>1000₽/м2</div>
                  <div className='text-xs flex flex-col text-gray-400'>
                    <div>500-1450 x 155 x 15 мм</div>
                    <div>Модель: 91-402</div>
                  </div>
                </div>
                <div className='flex gap-2 items-start'>
                  <div onClick={(e) => {
                    e.stopPropagation();
                  }} className='p-4 rounded-full hover:bg-gray-200 cursor-pointer select-none'>
                    <FaTrash size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='px-4 lg:px-72 py-6 flex gap-2'>
            <div className='bg-green-600 text-white font-semibold hover:bg-green-700 cursor-pointer select-none px-4 py-2 rounded-2xl flex items-center gap-2'>
              <div>Связаться с менеджером</div>
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
