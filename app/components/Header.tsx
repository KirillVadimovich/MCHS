"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaYoutube, FaEye, FaEyeSlash, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [lang, setLang] = useState("RU");
  const [showSettings, setShowSettings] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Верхний светло-синий хедер */}
      <div className="bg-[#083759] text-white flex justify-end items-center p-4 px-6 md:px-[230px] space-x-4 relative">
        {/* Кнопка смены языка */}
        <button
          className="ml-[10px] w-8 h-8 bg-[#072c42] text-white rounded-full flex items-center justify-center text-xs font-semibold hover:bg-[#061f2e] transition"
          onClick={() => setLang(lang === "RU" ? "KAZ" : "RU")}
        >
          {lang}
        </button>

        {/* Кнопка настроек */}
        <button
          className="ml-[10px] w-8 h-8 bg-[#072c42] text-white rounded-full flex items-center justify-center hover:bg-[#061f2e] transition"
          onClick={() => setShowSettings(!showSettings)}
        >
          {showSettings ? <FaEyeSlash /> : <FaEye />}
        </button>

        {/* Окно настроек */}
        {showSettings && (
          <div className="absolute top-14 right-6 md:right-[190px] bg-white p-6 rounded-lg shadow-lg border w-72 z-50">
            <h3 className="text-xl font-bold mb-4 text-[#1E3A5F]">Настройки</h3>

            {/* Размер шрифта */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-black">Размер шрифта</h4>
              <div className="flex flex-col space-y-2">
                <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-black transition">
                  Обычный
                </button>
                <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-black transition">
                  Крупный
                </button>
                <button className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-black transition">
                  Очень крупный
                </button>
              </div>
            </div>

            {/* Смена темы */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-black">Смена темы</h4>
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 rounded font-semibold transition ${
                    theme === "light" ? "bg-[#1E3A5F] text-white" : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                  onClick={() => setTheme("light")}
                >
                  Светлая
                </button>
                <button
                  className={`px-4 py-2 rounded font-semibold transition ${
                    theme === "dark" ? "bg-[#1E3A5F] text-white" : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                  onClick={() => setTheme("dark")}
                >
                  Тёмная
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Иконка пользователя и "Вход" */}
        <div className="ml-[10px] flex flex-col items-center space-y-1">
          <div className="flex items-center space-x-2">
            <FaUser className="text-lg" />
            <Link href="/login" className="underline hover:text-gray-300 transition">
              Вход
            </Link>
          </div>
        </div>
      </div>

      {/* Основной темно-синий хедер */}
      <div className="bg-[#1F3C88] text-white">
        <div className="flex justify-between items-center py-6 px-6 md:px-[270px]">
          {/* Логотип и название */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/416b29f7e40227e3786f083711ee1c4d_original.866125.png"
                alt="Логотип"
                width={60}
                height={60}
                className="w-16 h-16 cursor-pointer"
              />
            </Link>
            <Link href="/" className="text-xl font-bold hover:text-gray-300 transition">
              <div>Домашний пожарный контроль</div>
              <div className="text-lg">Республики Казахстан</div>
            </Link>
          </div>

          {/* Соцсети */}
          <div className="hidden md:flex space-x-4 text-xl -mr-[40px]">
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="hover:text-gray-300 transition" />
            </Link>
            <Link href="https://www.facebook.com/qrtjm" target="_blank">
              <FaFacebookF className="hover:text-gray-300 transition" />
            </Link>
            <Link href="https://t.me/qr_tjm" target="_blank">
              <FaTelegramPlane className="hover:text-gray-300 transition" />
            </Link>
            <Link href="https://www.youtube.com/channel/UC9Lk8S70ytRKyV2zahIHUSg" target="_blank">
              <FaYoutube className="hover:text-gray-300 transition" />
            </Link>
          </div>
        </div>
        {/* Разделительная линия */}
        <div className="border-t border-white opacity-30"></div>

        {/* Навигация */}
        <nav className="hidden md:flex justify-start space-x-6 py-3 px-[270px]">
          <Link href="/events" className="hover:text-gray-300">Мероприятия</Link>
          <Link href="/map" className="hover:text-gray-300">Карта</Link>
          <Link href="/profile" className="hover:text-gray-300">Личный кабинет</Link>
        </nav>
      </div>
    </header>
  );
}
