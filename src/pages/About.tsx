import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Heart, Shield, Sparkles, MapPin } from 'lucide-react';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="flex items-center mb-4">
            <div className="bg-pink-100 text-[#B50080] rounded-full p-2 mr-4">
                {icon}
            </div>
            <h3 className="font-bold text-xl text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{children}</p>
    </div>
);

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-700 mb-4">ユリシスディーバについて</h1>
          <p className="text-lg md:text-xl text-gray-600">
            コンプレックスを“自信”に変える、私たちの想いと技術。
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">ごあいさつ</h2>
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 text-center">
                        <img 
                        src="https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=800" 
                        alt="須美 ひろ江" 
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto shadow-lg mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-800">須美 ひろ江</h3>
                        <p className="text-[#B50080] font-medium">ユリシス☆ディーバ代表</p>
                        <p className="text-sm text-gray-500 mt-1">DINAIRアメリカ本社認定講師</p>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg leading-relaxed mb-6">
                            はじめまして。ユリシス☆ディーバ代表の須美ひろ江です。
                        </p>
                        <p className="text-base leading-relaxed text-gray-600 mb-4">
                            私がこの道に進んだきっかけは、自身の抜毛症という悩み、そして大切な弟を亡くした経験でした。薄くなった部分をエアブラシでカバーした時の「こんなに美しく変われるんだ」という感動。生前にタトゥーがあった弟を、母が世間体を気にして不本意な形で送ったのを見て「エアブラシなら自然に隠せたのに…」と思った悔しさ。これらの経験が私の原点です。
                        </p>
                        <p className="text-base leading-relaxed text-gray-600 mb-4">
                            エアブラシメイクがもたらす<strong className="text-[#B50080]">「コンプレックスを笑顔に変える力」</strong>、そしてお客様に<strong className="text-[#B50080]">「ハッピーを届ける魔法」</strong>をかけることに、私は大きな情熱を注いでいます。DINAIRのCEOから直接いただいた「ハッピーエアブラシね！」という言葉を胸に、この素晴らしい技術を一人でも多くの方に届けたいと願っています。
                        </p>
                        <p className="text-base leading-relaxed text-gray-600">
                            この技術は、私自身にも何かを「できる」ようになるための「立ち上がる力」を与えてくれました。日本にまだ数名しかいないDINAIR認定講師の一人として、心を込めて、あなたの人生を変えるきっかけをお届けします。
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">ユリシスのこだわり・技術</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureItem icon={<Sparkles size={24} />} title="オーダーメイドの精密な色調合">
              お客様一人ひとりの肌の色、カバーしたい箇所、タトゥーや傷の状態に合わせて、専門の技術者がボディーファンデーションをミリ単位で精密に調合します。独自の技術でごく薄く、何層にも丁寧に重ねていくことで、まるで素肌のような自然で美しい仕上がりを実現します。
            </FeatureItem>
            <FeatureItem icon={<Heart size={24} />} title="肌への優しさを最優先">
              使用するファンデーションは水溶性ベースで、肌への優しさを第一に考えて選んでいます。直接肌に触れないエアブラシの技術は非接触で衛生的であり、敏感肌やアトピー肌の方にも安心して施術を受けていただけます。ボディジュエリーのグルーもFDA認証済みの安全なものです。
            </FeatureItem>
            <FeatureItem icon={<Award size={24} />} title="世界基準のDINAIR技術">
              当サロンの技術は、エアブラシメイクのパイオニア、米国ハリウッド発祥のDINAIRのものです。30年以上の歴史を持つ信頼のブランドで、常に最新の技術を学び、取り入れています。代表はDINAIRアメリカ本社から直接認定を受けた、日本でも数少ない認定講師です。
            </FeatureItem>
            <FeatureItem icon={<Shield size={24} />} title="安心のプライベート空間">
              施術は、完全予約制のプライベートな空間で、マンツーマンで行います。他のお客様を気にすることなく、どのようなお悩みやご要望でも、じっくりとご相談いただける安心の環境です。美容師免許がなくても提供できるボディへの施術も安心して学んでいただけます。
            </FeatureItem>
          </div>
        </div>
      </section>

      {/* Salon Info Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">サロン情報</h2>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.249992958301!2d132.4678583152241!3d34.3952099805146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a9f6559813661%3A0x53d8c9f823574a4!2z44CSNzM0LTAwNTQg5bqD5bO255yM5bqD5bO25biC5Y2X5Yy655m95a6f55S677yV5LiB55uu77yS77yQ4oiS77yZIOOCquODs-ODi-OCuOODqeWbv-WMl-S6leODleODqyAxMDA3!5e0!3m2!1sja!2sjp!4v1663320941747!5m2!1sja!2sjp" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, minHeight: '300px' }} 
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="md:w-1/2 p-8">
                        <h3 className="text-2xl font-bold mb-4">ユリシス☆ディーバ</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <MapPin className="mr-3 mt-1 text-[#B50080] flex-shrink-0" />
                                <span>広島市南区皆実町5丁目20-9 アームズ皆実1007</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold w-24">営業時間:</span>
                                <span>10:00～20:00</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold w-24">定休日:</span>
                                <span>なし</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <Link 
                                to="/contact" 
                                className="inline-block bg-[#B50080] text-white hover:bg-[#a10070] px-6 py-3 rounded-full font-medium transition-colors duration-300"
                            >
                                お問い合わせはこちら
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default About;
