"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEdit, FaCheck } from "react-icons/fa";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("мероприятия");
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Алексей");
  const [lastName, setLastName] = useState("Петров");

  const renderCreateButton = () => {
    if (activeTab === "мероприятия") {
      return (
        <Link href="/MEROPRYATIE">
          <button className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-6 py-3 rounded-lg shadow-md">
            Создать мероприятие
          </button>
        </Link>
      );
    } else if (activeTab === "новости") {
      return (
        <Link href="/NOVOST">
          <button className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-6 py-3 rounded-lg shadow-md">
            Создать новость
          </button>
        </Link>
      );
    } else if (activeTab === "обходы") {
      return (
        <Link href="/OBHODADMIN">
          <button className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-6 py-3 rounded-lg shadow-md">
            Создать обход
          </button>
        </Link>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Левая часть – личные данные администратора */}
      <aside className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r bg-white rounded-lg shadow-lg m-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Личный кабинет админа
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Имя
            </label>
            {isEditing ? (
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
            ) : (
              <div className="w-full border border-gray-300 p-2 rounded-lg">
                {firstName}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Фамилия
            </label>
            {isEditing ? (
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
            ) : (
              <div className="w-full border border-gray-300 p-2 rounded-lg">
                {lastName}
              </div>
            )}
          </div>
        </div>
        {/* Кнопка-иконка для редактирования */}
        <div className="mt-6 flex justify-end">
          {isEditing ? (
            <button
              onClick={() => setIsEditing(false)}
              className="text-green-500 hover:text-green-600 transition-colors"
            >
              <FaCheck size={20} />
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <FaEdit size={20} />
            </button>
          )}
        </div>
      </aside>

      {/* Основная часть */}
      <main className="w-full md:w-3/4 p-6">
        {/* Мини-хедер с табами */}
        <div className="mb-6">
          <div className="flex justify-center border-b pb-2 space-x-6">
            <button
              onClick={() => setActiveTab("мероприятия")}
              className={`px-4 py-2 transition-all duration-200 ${
                activeTab === "мероприятия"
                  ? "border-b-2 border-green-500 text-green-700"
                  : "text-gray-600 hover:text-green-500"
              }`}
            >
              Мероприятия
            </button>
            <button
              onClick={() => setActiveTab("новости")}
              className={`px-4 py-2 transition-all duration-200 ${
                activeTab === "новости"
                  ? "border-b-2 border-green-500 text-green-700"
                  : "text-gray-600 hover:text-green-500"
              }`}
            >
              Новости
            </button>
            <button
              onClick={() => setActiveTab("обходы")}
              className={`px-4 py-2 transition-all duration-200 ${
                activeTab === "обходы"
                  ? "border-b-2 border-green-500 text-green-700"
                  : "text-gray-600 hover:text-green-500"
              }`}
            >
              Обходы
            </button>
          </div>
        </div>

        {/* Кнопка для создания элемента */}
        <div className="flex justify-center mb-8">{renderCreateButton()}</div>

        {/* Список элементов */}
        <section>
          <h3 className="text-xl font-semibold mb-4 capitalize text-center text-gray-800">
            {activeTab}
          </h3>
          <div className="space-y-4">
            {/* Пример карточки */}
            <div className="border p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
              <p className="font-medium text-gray-800">Элемент №1</p>
              <p className="text-sm text-gray-600">
                Дополнительная информация...
              </p>
            </div>
            <div className="border p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
              <p className="font-medium text-gray-800">Элемент №2</p>
              <p className="text-sm text-gray-600">
                Дополнительная информация...
              </p>
            </div>
            {/* Здесь можно вывести список через map */}
          </div>
        </section>
      </main>
    </div>
  );
}
