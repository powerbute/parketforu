import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ParketForU | Купить паркет",
    template: `ParketForU | Купить паркет`,
  },
  description: "Вдохните жизнь в ваши пространства с помощью качественного паркета от ParketForU! Наш интернет-магазин предлагает широкий ассортимент стильного и долговечного паркета, который добавит уют и элегантность в любой интерьер",
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: 'GoCo.png',
    shortcut: 'GoCo.png',
    apple: 'GoCo.png',
  },
  manifest: `/favicon/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className=''>{children}</body>
    </html>
  );
}
