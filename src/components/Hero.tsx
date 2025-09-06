import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] bg-gradient-to-r from-[#B50080] to-[#800060] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fadeIn">
            コンプレックスを、<br />
            <span className="text-pink-200">"自信"</span>に変える<br />
            エアブラシメイク
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 animate-fadeInUp">
            Happy Airbrush で、<br className="md:hidden" />あなたの美しさを解き放つ
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp animation-delay-300">
            <Link 
              to="/services" 
              className="bg-white text-[#B50080] hover:bg-pink-100 px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              サービスを見る
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      
      {/* Elegant corner decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 border-t-4 border-r-4 border-white/30 rounded-tl-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 border-b-4 border-l-4 border-white/30 rounded-tr-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;