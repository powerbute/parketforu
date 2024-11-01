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
          <div className='text-5xl font-black'>ParketForU</div>
          <div className='flex items-center gap-2'>
            <div className='bg-green-600 font-semibold hover:bg-green-700 cursor-pointer select-none px-4 py-2 rounded-2xl flex items-center gap-2'>
              <FaBook />
              <div>Каталог</div>
            </div>
            <div className='bg-stone-800 font-semibold hover:bg-stone-900 cursor-pointer select-none px-4 py-2 rounded-2xl flex items-center gap-2'>
              <FaShoppingCart />
              <div>1</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 px-4 lg:px-24 py-32 text-white object-fill' style={{ background: "url(/parketdark.jpg)" }}>
          <div className='text-xl md:text-4xl font-bold'>Работаем с 2000 года</div>
          <div className='text-3xl md:text-7xl font-black'>Паркет по Москве и области</div>
          <div className='text-lg md:text-2xl font-semibold'><span className='bg-yellow-700 bg-opacity-80'>Вдохните жизнь в ваши пространства с помощью качественного паркета от ParketForU!</span> Наш интернет-магазин предлагает широкий ассортимент стильного и долговечного паркета, который добавит уют и элегантность в любой интерьер</div>
          <div className='flex gap-2'>
            <div className='bg-green-600 font-semibold hover:bg-green-700 cursor-pointer select-none px-4 py-2 rounded-2xl flex items-center gap-2'>
              <FaBook />
              <div>Каталог</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col xl:flex-row gap-4 xl:items-center justify-between px-4 lg:px-72 py-6'>
            <div className='flex gap-3 items-center text-3xl font-bold'>
              <MdDiscount />
              Лучшая цена
            </div>
            <div className='flex gap-3 items-center text-3xl font-bold'>
              <MdDiscount />
              Гарантия
            </div>
            <div className='flex gap-3 items-center text-3xl font-bold'>
              <FaTruck />
              Доставка
            </div>
            <div className='flex gap-3 items-center text-3xl font-bold'>
              <FaClock />
              Быстрый заказ
            </div>
          </div>
          <div className='flex flex-col gap-4 bg-yellow-50 px-4 lg:px-72 py-6'>
            <div className='text-4xl font-bold'>Почему выбирают именно нас?</div>
            <div className='flex flex-col md:flex-row justify-between gap-4'>
              <div className='text-xl font-semibold flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                  <div className='text-3xl font-semibold'>Качество</div>
                  <div>Мы предлагаем только проверенные материалы от надежных производителей, обеспечивая вам долговечность и эстетику</div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='text-3xl font-semibold'>Широкий ассортимент</div>
                  <div>В нашем каталоге вы найдете паркеты различных стилей, цветов и текстур, которые подойдут для любого помещения</div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='text-3xl font-semibold'>Доступные цены</div>
                  <div>Мы стремимся сделать качественный паркет доступным для каждого, предлагая конкурентные цены и специальные предложения</div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='text-3xl font-semibold'>Профессиональная консультация</div>
                  <div>Наша команда всегда готова помочь вам в выборе идеального паркета, учитывая ваши предпочтения и потребности</div>
                </div>
              </div>
              <div className='hidden xl:flex flex-wrap justify-end gap-1'>
                <img className='w-48 h-fit rounded-tl-xl' src='/parkets/1.jpeg' />
                <img className='w-48 h-fit rounded-tr-xl' src='/parkets/2.jpeg' />
                <img className='w-48 h-fit rounded-bl-xl' src='/parkets/3.png' />
                <img className='w-48 h-fit' src='/parkets/4.png' />
                <img className='w-48 h-fit rounded-b-xl' src='/parkets/5.png' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-10 bg-stone-950 text-white px-4 lg:px-72 py-6'>
            <div className='text-4xl font-bold'>Выбор паркета</div>
            <div className='flex flex-col md:flex-row justify-between gap-8'>
              <div className='flex justify-between w-full items-center gap-2 text-4xl font-semibold border-b-2 pb-4 px-4 hover:border-yellow-300 cursor-pointer hover:text-yellow-300 select-none'>
                <FaTree />
                Древесина
              </div>
              <div className='flex justify-between w-full items-center gap-2 text-4xl font-semibold border-b-2 pb-4 px-4 hover:border-yellow-300 cursor-pointer hover:text-yellow-300 select-none'>
                <FaSortAlphaDown />
                Бренды
              </div>
              <div className='flex justify-between w-full items-center gap-2 text-4xl font-semibold border-b-2 pb-4 px-4 hover:border-yellow-300 cursor-pointer hover:text-yellow-300 select-none'>
                <FaGlasses />
                Помощь
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 text-white px-4 lg:px-72 py-6'>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/1.jpeg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Паркетная доска</div>
            </div>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/2.jpeg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Инженерная доска</div>
            </div>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/3.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Паркет ёлочка</div>
            </div>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/4.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Массивная доска</div>
            </div>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/5.jpeg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Деревянные стеновые панели</div>
            </div>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/6.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Модульный паркет</div>
            </div>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/7.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Ламинат</div>
            </div>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/8.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Виниловый пол</div>
            </div>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/9.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Террасная доска</div>
            </div>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/10.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Геометрический паркет</div>
            </div>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
              <img src='/parketgrid/11.jpg' className='absolute w-full h-full z-[0] top-0 left-0 hover:scale-125 ease-in duration-300' />
              <div className='z-[1]'>Штучный паркет</div>
            </div>
            <div className='aspect-square p-4 flex items-end text-3xl font-semibold bg-stone-100 relative overflow-hidden cursor-pointer'>
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
