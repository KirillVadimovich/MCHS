import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F3C88] text-white">
  
      <div className="py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
  
        <div className="md:ml-[250px]">
          <h3 className="text-lg font-semibold mb-4">Государственные ресурсы</h3>
          <ul className="space-y-2">
            <li><Link href="https://www.akorda.kz/ru" target="_blank" className="hover:text-gray-300">Сайт Президента РК</Link></li>
            <li><Link href="https://primeminister.kz/ru" target="_blank" className="hover:text-gray-300">Сайт Премьер-Министра РК</Link></li>
            <li><Link href="https://www.parlam.kz/ru" target="_blank" className="hover:text-gray-300">Сайт Парламента РК</Link></li>
            <li><Link href="https://www.gov.kz/article/128915?lang=ru" target="_blank" className="hover:text-gray-300">Гос. символы РК</Link></li>
            <li><Link href="https://www.akorda.kz/ru/addresses" target="_blank" className="hover:text-gray-300">Послания Президента РК</Link></li>
            <li><Link href="https://www.gov.kz/memleket/entities/mam/documents/details/474854" target="_blank" className="hover:text-gray-300">Нац. стандарт РК</Link></li>
            <li><Link href="https://ortcom.kz/ru/" target="_blank" className="hover:text-gray-300">Служба цент. комм.</Link></li>
          </ul>
        </div>

      
        <div className="md:ml-[100px]">
          <h3 className="text-lg font-semibold mb-4">Полезные ссылки</h3>
          <ul className="space-y-2">
            <li><Link href="https://www.gov.kz/article/41788?lang=ru" target="_blank" className="hover:text-gray-300">Жизненные ситуации</Link></li>
            <li><Link href="https://t.me/govkz_news" target="_blank" className="hover:text-gray-300">Новостной канал гос. органов</Link></li>
            <li><Link href="https://adilet.zan.kz/rus/docs/P2300000269" target="_blank" className="hover:text-gray-300">Цифровая трансформация</Link></li>
            <li><Link href="https://stat.gov.kz/ru/sustainable-development-goals/goal/" target="_blank" className="hover:text-gray-300">Цели устойчивого развития</Link></li>
            <li><Link href="https://www.gov.kz/article/terms" target="_blank" className="hover:text-gray-300">Термины и обозначения</Link></li>
            <li><Link href="https://screenreader.tilqazyna.kz/#download" target="_blank" className="hover:text-gray-300">Экранный диктор</Link></li>
          </ul>
        </div>

 
        <div className="md:mr-[50px]">
          <h3 className="text-lg font-semibold mb-4">Подписаться на обновления</h3>
          <input 
            type="email" 
            placeholder="Введите ваш email" 
            className="w-full md:w-[65%] p-2 rounded text-black"
          />
          <button className="w-full md:w-[65%] mt-2 bg-[#083759] text-white p-2 rounded hover:bg-[#072c42] transition">
            Подписаться
          </button>


          <h3 className="text-lg font-semibold mt-6">Социальные сети</h3>
          <div className="flex space-x-4 mt-2 text-xl">
            <Link href="https://www.instagram.com/qaz.tjm/" target="_blank" aria-label="Instagram">
              <FaInstagram className="hover:text-gray-300 transition" />
            </Link>
            <Link href="https://www.facebook.com/qrtjm" target="_blank" aria-label="Facebook">
              <FaFacebookF className="hover:text-gray-300 transition" />
            </Link>
            <Link href="https://t.me/qr_tjm" target="_blank" aria-label="Telegram">
              <FaTelegramPlane className="hover:text-gray-300 transition" />
            </Link>
            <Link href="https://www.youtube.com/@qrtjm" target="_blank" aria-label="YouTube">
              <FaYoutube className="hover:text-gray-300 transition" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#1E3A5F] text-white py-4 text-sm">
        <div className="px-6">
          <p className="text-center md:text-left md:ml-[250px]">2025 © Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}