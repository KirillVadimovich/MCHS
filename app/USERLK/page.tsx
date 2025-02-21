"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEdit, FaCheck } from "react-icons/fa";

export default function UserDashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Иван");
  const [lastName, setLastName] = useState("Иванов");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Левая часть – личные данные пользователя */}
      <aside className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r bg-white rounded-lg shadow-lg m-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Личный кабинет
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
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            ) : (
              <div className="w-full border border-gray-300 p-2 rounded-lg">
                {lastName}
              </div>
            )}
          </div>
        </div>
        {/* Иконка редактирования */}
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
        {/* Верхняя кнопка */}
        <div className="flex justify-center mb-8">
          <Link href="/OBHOD">
            <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-200 text-white px-6 py-3 rounded-lg shadow-md">
              Добавить обход
            </button>
          </Link>
        </div>

        {/* Список созданных форм */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
            Ваши обходы
          </h3>
          <div className="space-y-4">
            {/* Пример карточки */}
            <div className="border p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
              <p className="font-medium text-gray-800">Обход №1</p>
              <p className="text-sm text-gray-600">
                Описание или другая информация...
              </p>
            </div>
            <div className="border p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
              <p className="font-medium text-gray-800">Обход №2</p>
              <p className="text-sm text-gray-600">
                Описание или другая информация...
              </p>
            </div>
            {/* Здесь можно вывести список через map */}
          </div>
        </section>
      </main>
    </div>
  );
}
