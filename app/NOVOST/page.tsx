"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNews() {
  const router = useRouter();
  const [headline, setHeadline] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки данных, включая изображение
    console.log({ headline, content, image });
    router.push("/admin");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Создать новость
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Заголовок новости
          </label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            placeholder="Введите заголовок"
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Содержание
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Введите содержание"
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Изображение (необязательно)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImage(e.target.files[0]);
              }
            }}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 transition-colors text-white px-4 py-2 rounded-lg"
        >
          Создать новость
        </button>
      </form>
    </div>
  );
}
