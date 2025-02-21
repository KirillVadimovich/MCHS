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
    // Перенаправление в админский ЛК
    router.push("/admin");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Создать новость</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Заголовок новости</label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Введите заголовок"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Содержание</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Введите содержание"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Изображение</label>
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
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
        >
          Создать новость
        </button>
      </form>
    </div>
  );
}
