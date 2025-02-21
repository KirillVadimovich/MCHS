"use client";

import { useState, useEffect } from "react";

export default function VisitForm() {
  const [date, setDate] = useState("");
  const [officerName, setOfficerName] = useState("Иванов Иван Иванович"); 

  const [formData, setFormData] = useState({
    address: "",
    family: "",
    category: "",
    traineeName: "",
  });

  const [errors, setErrors] = useState({
    address: false,
    family: false,
    category: false,
    traineeName: false,
  });

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      address: formData.address.trim() === "",
      family: formData.family.trim() === "",
      category: formData.category.trim() === "",
      traineeName: formData.traineeName.trim() === "",
    };

    setErrors(newErrors);

    
    if (Object.values(newErrors).includes(true)) return;

    alert("Форма успешно отправлена! ✅");
  };

  return (
    <div className="bg-[#1F3C88] text-white p-6 rounded-lg max-w-lg mx-auto mt-10 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Форма посещения</h2>
      
      <form className="space-y-4" onSubmit={handleSubmit}>

        <div>
          <label className="block text-sm font-medium">Дата посещения</label>
          <input 
            type="date" 
            value={date} 
            readOnly 
            className="w-full p-2 rounded text-black bg-white"
          />
        </div>

 
        <div>
          <label className="block text-sm font-medium">Адрес объекта</label>
          <input 
            type="text" 
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Введите адрес" 
            className={`w-full p-2 rounded text-black bg-white ${errors.address ? "border-2 border-red-500" : ""}`}
          />
          {errors.address && (
            <p style={{ color: "red", fontSize: "0.875rem", marginTop: "0.25rem" }}>
              Пожалуйста, заполните данное поле*
            </p>
          )}
        </div>

  
        <div>
          <label className="block text-sm font-medium">Состав семьи (из них дети)</label>
          <input 
            type="text"
            name="family"
            value={formData.family}
            onChange={handleChange}
            placeholder="Например: 5 (из них 2 детей)" 
            className={`w-full p-2 rounded text-black bg-white ${errors.family ? "border-2 border-red-500" : ""}`}
          />
          {errors.family && (
            <p style={{ color: "red", fontSize: "0.875rem", marginTop: "0.25rem" }}>
              Пожалуйста, заполните данное поле*
            </p>
          )}
        </div>

   
        <div>
          <label className="block text-sm font-medium">Категория граждан</label>
          <select 
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full p-2 rounded text-black bg-white ${errors.category ? "border-2 border-red-500" : ""}`}
          >
            <option value="">Выберите категорию</option>
            <option value="многодетные">Многодетная семья</option>
            <option value="малоимущие">Малоимущая семья</option>
            <option value="пенсионеры">Пенсионеры</option>
            <option value="инвалиды">Инвалиды</option>
            <option value="одинокие">Одиноко проживающие</option>
          </select>
          {errors.category && (
            <p style={{ color: "red", fontSize: "0.875rem", marginTop: "0.25rem" }}>
              Пожалуйста, заполните данное поле*
            </p>
          )}
        </div>

    
        <div>
          <label className="block text-sm font-medium">Ф.И.О инструктируемого</label>
          <input 
            type="text" 
            name="traineeName"
            value={formData.traineeName}
            onChange={handleChange}
            placeholder="Введите Ф.И.О" 
            className={`w-full p-2 rounded text-black bg-white ${errors.traineeName ? "border-2 border-red-500" : ""}`}
          />
          {errors.traineeName && (
            <p style={{ color: "red", fontSize: "0.875rem", marginTop: "0.25rem" }}>
              Пожалуйста, заполните данное поле*
            </p>
          )}
        </div>

       
        <div>
          <label className="block text-sm font-medium">Ф.И.О должностного лица</label>
          <input 
            type="text" 
            value={officerName} 
            readOnly 
            className="w-full p-2 rounded text-black bg-white"
          />
        </div>

 
        <button 
          type="submit" 
          className="w-full mt-4 p-2 rounded bg-[#083759] text-white hover:bg-[#072c42] transition"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}