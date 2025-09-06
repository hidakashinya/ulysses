import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-6">ユリシスディーバ</h3>
            <p className="mb-4 text-gray-300">
              コンプレックスを"自信"に変えるエアブラシメイク。
              ハッピーエアブラシで、あなたの美しさを解き放ちます。
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-[#B50080] transition-colors duration-300">
                <span className="sr-only">LINE</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .63.285.63.63 0 .349-.284.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#B50080] transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-6">サービス</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/complex-cover" className="text-gray-300 hover:text-[#B50080] transition-colors duration-300">コンプレックスカバー</Link>
              </li>
              <li>
                <Link to="/tattoo-cover" className="text-gray-300 hover:text-[#B50080] transition-colors duration-300">タトゥーカバー</Link>
              </li>
              <li>
                <Link to="/body-jewelry" className="text-gray-300 hover:text-[#B50080] transition-colors duration-300">ボディジュエリー</Link>
              </li>
              <li>
                <Link to="/school" className="text-gray-300 hover:text-[#B50080] transition-colors duration-300">DINAIRエアブラシスクール</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-6">お問い合わせ</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#B50080] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">広島市南区皆実町5丁目20-9 アームズ皆実1007</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#B50080] mr-3 flex-shrink-0" />
                <a href="tel:0908709993" className="text-gray-300 hover:text-[#B50080] transition-colors duration-300">090-8710-9993</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#B50080] mr-3 flex-shrink-0" />
                <a href="mailto:info@example.com" className="text-gray-300 hover:text-[#B50080] transition-colors duration-300">info@example.com</a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-[#B50080] mr-3 flex-shrink-0" />
                <span className="text-gray-300">10:00～20:00（定休日なし）</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ユリシスディーバ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;