"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateObhod() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки данных (например, API вызов)
    console.log({ title, description, date });
    // Перенаправление в ЛК (админский)
    router.push("/admin");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Создать обход</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Название обхода</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Введите название"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Описание</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Введите описание"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Дата обхода</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Создать обход
        </button>
      </form>
    </div>
  );
}
