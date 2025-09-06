import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-serif font-bold">
            <span className={`${isScrolled ? 'text-[#B50080]' : 'text-white'} transition-colors duration-300`}>
              ユリシスディーバ
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { name: 'ホーム', path: '/' },
                { name: 'コンプレックスカバー', path: '/complex-cover' },
                { name: 'タトゥーカバー', path: '/tattoo-cover' },
                { name: 'ボディジュエリー', path: '/body-jewelry' },
                { name: 'エンゼルメイク', path: '/angel-makeup' },
                { name: 'スクール', path: '/school' },
                { name: 'ユリシスディーバについて', path: '/about' },
                { name: 'お問い合わせ', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`
                      font-medium transition-colors duration-300
                      ${isScrolled 
                        ? location.pathname === item.path 
                          ? 'text-[#B50080]' 
                          : 'text-gray-700 hover:text-[#B50080]' 
                        : 'text-white hover:text-pink-200'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden"
            aria-label={isMenuOpen ? "閉じる" : "メニューを開く"}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-[#B50080]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#B50080]' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fadeIn">
          <ul className="py-4">
            {[
              { name: 'ホーム', path: '/' },
              { name: 'コンプレックスカバー', path: '/complex-cover' },
              { name: 'タトゥーカバー', path: '/tattoo-cover' },
              { name: 'ボディジュエリー', path: '/body-jewelry' },
              { name: 'エンゼルメイク', path: '/angel-makeup' },
              { name: 'スクール', path: '/school' },
              { name: 'ユリシスディーバについて', path: '/about' },
              { name: 'お問い合わせ', path: '/contact' },
            ].map((item) => (
              <li key={item.path} className="border-b border-gray-100 last:border-b-0">
                <Link 
                  to={item.path} 
                  className={`
                    block py-3 px-6 font-medium transition-colors duration-300
                    ${location.pathname === item.path 
                      ? 'text-[#B50080] bg-pink-50' 
                      : 'text-gray-700 hover:text-[#B50080] hover:bg-pink-50'
                    }
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;