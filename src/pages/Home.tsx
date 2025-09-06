import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* 2. Concept Section */}
      <section id="concept" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src="/img/complex-cover/before1.jpg" 
                      alt="施術前後の比較1" 
                      className="w-full h-48 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=400";
                      }}
                    />
                    <img 
                      src="/img/body-jewely/body1.jpg" 
                      alt="ボディジュエリー" 
                      className="w-full h-32 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg?auto=compress&cs=tinysrgb&w=400";
                      }}
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img 
                      src="/img/complex-cover/after1.jpg" 
                      alt="美しい仕上がり" 
                      className="w-full h-32 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/3373737/pexels-photo-3373737.jpeg?auto=compress&cs=tinysrgb&w=400";
                      }}
                    />
                    <img 
                      src="/img/tatoo-cover/tatoo1.jpg" 
                      alt="タトゥーカバー" 
                      className="w-full h-48 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/7794435/pexels-photo-7794435.jpeg?auto=compress&cs=tinysrgb&w=400";
                      }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#B50080]/5 to-transparent rounded-3xl -z-10 transform rotate-3"></div>
              </div>
              
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-800 leading-tight">
                  コンプレックスを、<br />
                  <span className="text-[#B50080]">"自信"</span>に変える<br />
                  エアブラシメイク
                </h2>
                <div className="h-1 w-24 bg-[#B50080] mb-8"></div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-medium text-gray-800 mb-3">ハッピーエアブラシとは</h3>
                    <p className="text-gray-600 leading-relaxed">
                      見た目だけでなく心まで前向きに変えていく、私たちの特別な技術です。
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-medium text-gray-800 mb-3">私たちの使命</h3>
                    <p className="text-gray-600 leading-relaxed">
                      DINAIRエアブラシメイクの技術を通じて、多くの人々の人生に変化を届けています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. Profile Section */}
      <section id="profile" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-16">
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#B50080]/20 to-transparent rounded-2xl transform -rotate-3"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                  <img 
                    src="/img/staff/staff1.jpg" 
                    alt="須美ひろ江" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="mb-4">
                <span className="inline-block bg-[#B50080]/10 text-[#B50080] px-4 py-2 rounded-full text-sm font-medium">代表メッセージ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800 leading-tight">
                適応障害、抜毛症、そして弟の死。<br />
                <span className="text-[#B50080]">その経験が、私をエアブラシメイクへと導きました</span>
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  私自身の長年の肌悩み（抜毛症）と、大切な家族の経験から、エアブラシメイクがもたらす
                  <span className="font-medium text-gray-700">「コンプレッックスを笑顔に変える力」</span>を深く実感しました。
                </p>
                <p className="text-lg leading-relaxed">
                  技術を通じてお客様に<span className="text-[#B50080] font-medium">「ハッピーを届ける魔法」</span>をかけることに、
                  大きなやりがいと情熱を感じています。
                </p>
                <p className="text-base leading-relaxed text-gray-500 italic">
                  "ただのメイク"ではない、「生き方」に関わる技術としての想いをお届けします。
                </p>
              </div>
              <div className="mt-10">
                <Link 
                  to="/about" 
                  className="inline-flex items-center bg-[#B50080] text-white hover:bg-[#A10070] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  プロフィールを詳しく見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">主なサービス</h2>
            <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              以下のようなお悩みを、<span className="font-medium text-gray-800">エアブラシ技術でサポート</span>します。<br />
              あなたのコンプレックスを自信に変える、特別な技術をご体験ください。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/tatoo-cover/tatoo1.jpg"
                  alt="タトゥーカバー"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/7794435/pexels-photo-7794435.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-3 text-gray-800">タトゥーカバー</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  結婚式、温泉旅行、就職活動など、タトゥーを一時的に隠したい方へ。自然な肌色で違和感なくカバーします。
                </p>
                <Link 
                  to="/tattoo-cover" 
                  className="inline-flex items-center text-[#B50080] font-medium hover:underline text-sm"
                >
                  詳細を見る
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/complex-cover/before1.jpg"
                  alt="コンプレックスカバー"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-3 text-gray-800">ニキビ跡・シミ・傷跡カバー</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  ニキビ跡、傷跡、アザなど肌の悩みを自然にカバー。長年のコンプレックスを解消し、自信を持って特別な日を迎えられます。
                </p>
                <Link 
                  to="/complex-cover" 
                  className="inline-flex items-center text-[#B50080] font-medium hover:underline text-sm"
                >
                  詳細を見る
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/body-jewely/body1.jpg"
                  alt="ボディジュエリー"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-3 text-gray-800">ボディジュエリー</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  特別な日をより輝かせる、肌に直接描く宝石のようなアート。あなただけのオリジナルデザインで魅力を引き立てます。
                </p>
                <Link 
                  to="/body-jewelry" 
                  className="inline-flex items-center text-[#B50080] font-medium hover:underline text-sm"
                >
                  詳細を見る
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/complex-cover/flow-img1.jpg"
                  alt="エンジェルメイク"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-3 text-gray-800">死化粧（エンジェルメイク）</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  故人の尊厳とご遺族の心に寄り添った「死化粧」を提供。その方らしさを大切にしたやさしいお見送りをサポートします。
                </p>
                <Link 
                  to="/angel-makeup" 
                  className="inline-flex items-center text-[#B50080] font-medium hover:underline text-sm"
                >
                  詳細を見る
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. About Airbrush Section */}
      <section id="about-airbrush" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="mb-4">
                <span className="inline-block bg-[#B50080]/10 text-[#B50080] px-4 py-2 rounded-full text-sm font-medium">DINAIR Technology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-800 leading-tight">
                DINAIRエアブラシメイクとは？
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-xl leading-relaxed">
                  <span className="font-medium text-gray-800">肌に優しく、しっかりカバー。高精細メディア対応力も。</span>
                </p>
                <p className="text-lg leading-relaxed">
                  従来のメイクでは難しかった仕上がりが実現できる、DINAIRの水性エアブラシメイクの魅力：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">薄づきなのに高カバー力</h4>
                    <p className="text-sm text-gray-600">霧状の細かい粒子で、薄い層を重ねてカバー力を実現</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">肌に優しい</h4>
                    <p className="text-sm text-gray-600">85%以上が水分の水性ベースで、敏感肌でも安心</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">高精細メディア対応</h4>
                    <p className="text-sm text-gray-600">4K・8K撮影でも自然で美しい仕上がり</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">耐水性・耐久性</h4>
                    <p className="text-sm text-gray-600">汗や水に強く、特別な一日も安心</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link 
                  to="/complex-cover" 
                  className="inline-flex items-center bg-[#B50080] text-white hover:bg-[#A10070] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  技術について詳しく見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#B50080]/20 to-transparent rounded-2xl transform rotate-3"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/img/complex-cover/flow-seratct-img2.jpg" 
                    alt="DINAIRエアブラシメイク施術風景" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/3373737/pexels-photo-3373737.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 6. School Section */}
      <section id="school" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">講習・スクール案内</h2>
            <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              <span className="font-medium text-gray-800">"ご自身のために"も、"お仕事のために"も</span>、目的に合わせた講習をご用意。<br />
              技術だけでなく、学んだことを確実に仕事につなげるビジネスノウハウもサポートします。
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">💄</span>
                </div>
                <h3 className="text-2xl font-serif text-gray-800 mb-3">セルフメイク講習</h3>
                <div className="h-1 w-12 bg-[#B50080] mb-4"></div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                ご自身でエアブラシメイクを楽しみたい方向けの講習です。日常使いからイベント用まで幅広く対応。肌の悩みを自分でカバーできるようになります。
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-500">
                <p>• 基本的なエアブラシ操作</p>
                <p>• 肌色調整とカバー技術</p>
                <p>• 日常使いのテクニック</p>
              </div>
              <Link 
                to="/school#self" 
                className="inline-flex items-center text-[#B50080] font-medium hover:underline"
              >
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-[#B50080] text-white text-xs px-3 py-1 rounded-full">人気</span>
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-serif text-gray-800 mb-3">プロフェッショナル講習</h3>
                <div className="h-1 w-12 bg-[#B50080] mb-4"></div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                サロン導入、撮影対応など、プロとして活躍するための技術と知識を習得。DINAIRアメリカ本社発行の国際ディプロマ取得が可能です。
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-500">
                <p>• 国際ディプロマ取得</p>
                <p>• ビジネス実践ノウハウ</p>
                <p>• サロンでの導入サポート</p>
              </div>
              <Link 
                to="/school#pro" 
                className="inline-flex items-center text-[#B50080] font-medium hover:underline"
              >
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-serif text-gray-800 mb-3">インストラクター養成講座</h3>
                <div className="h-1 w-12 bg-[#B50080] mb-4"></div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                AMJ認定制度に基づき、エアブラシメイクを教える立場として必要なスキルを学びます。技術普及のリーダーとして活躍できます。
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-500">
                <p>• AMJ認定インストラクター</p>
                <p>• 教育カリキュラム作成</p>
                <p>• スクール運営ノウハウ</p>
              </div>
              <Link 
                to="/school#instructor" 
                className="inline-flex items-center text-[#B50080] font-medium hover:underline"
              >
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-100">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">卒業生が続々成功！</h3>
              <p className="text-gray-600 mb-6">
                技術だけでなく、売上につながるビジネスノウハウもサポート。<br />
                ブライダル会場との提携獲得、客単価アップなど、実際の成果が出ています。
              </p>
              <Link 
                to="/school" 
                className="inline-flex items-center bg-[#B50080] text-white hover:bg-[#A10070] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                講習について詳しく見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-center text-gray-800">最新情報・お知らせ</h2>
          <div className="max-w-3xl mx-auto">
            {/* Placeholder for news items */}
            <div className="border-b py-4">
              <p className="text-gray-500 text-sm">2025.08.27</p>
              <p className="text-lg text-gray-800">ウェブサイトをリニューアルしました。</p>
            </div>
            <div className="border-b py-4">
              <p className="text-gray-500 text-sm">2025.08.20</p>
              <p className="text-lg text-gray-800">秋のブライダルキャンペーンを開始しました。</p>
            </div>
          </div>
          <div className="text-center mt-12">
              <Link 
                to="#" 
                className="inline-flex items-center text-[#B50080] font-medium hover:underline transition-all"
              >
                お知らせをもっと見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
        </div>
      </section>
      
      {/* 8. Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">お客様の声・実績紹介</h2>
            <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              実際に変化を感じた声をご覧いただけます。
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#B50080]/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#B50080] text-xl">💎</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">30代女性</p>
                        <p className="text-sm text-[#B50080]">タトゥーカバー</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                      「タトゥーを隠して温泉に行けるなんて思っていませんでした。家族との旅行が何倍も楽しくなりました！」
                    </blockquote>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#B50080]/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#B50080] text-xl">👰</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">20代女性</p>
                        <p className="text-sm text-[#B50080]">コンプレックスカバー</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                      「長年悩んでいた背中のニキビ跡。結婚式で背中が開いたドレスを着ることができて本当に感謝しています。」
                    </blockquote>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="sticky top-8 space-y-4">
                  <img 
                    src="/img/complex-cover/seacret-ba1.jpg" 
                    alt="施術実例1" 
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                  <img 
                    src="/img/complex-cover/seacret-ba2.jpg" 
                    alt="施術実例2" 
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="#" 
                className="inline-flex items-center bg-[#B50080] text-white hover:bg-[#A10070] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                実例をもっと見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 9. Contact CTA Section */}
      <section id="contact" className="py-16 bg-[#B50080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">お問い合わせ・ご予約</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            施術予約、講習申込、製品に関するお問い合わせはこちらから。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-[#B50080] hover:bg-pink-100 px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              フォームで相談
            </Link>
            <a 
              href="tel:0908709993" 
              className="inline-flex items-center bg-white/20 text-white hover:bg-white/30 px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              電話で相談
            </a>
            <a 
              href="#" 
              className="inline-flex items-center bg-white/20 text-white hover:bg-white/30 px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              LINEで相談
            </a>
          </div>
        </div>
      </section>
      
      {/* 10. Access Section */}
      <section id="access" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-800">アクセス</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              ユリシスディーバへのアクセス情報
            </p>
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                    <h3 className="text-2xl font-serif text-gray-800 mb-4">ユリシス☆ディーバ</h3>
                    <p className="text-gray-700 mb-2 flex items-center"><MapPin className="mr-2 text-[#B50080]" size={20} />広島市南区皆実町5丁目20-9 アームズ皆実1007</p>
                    <p className="text-gray-700 mb-2"><strong>営業時間:</strong> 10:00～20:00</p>
                    <p className="text-gray-700"><strong>定休日:</strong> なし</p>
                </div>
                <div className="md:w-1/2 h-64 rounded-lg overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.249992958301!2d132.4678583152241!3d34.3952099805146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a9f6559813661%3A0x53d8c9f823574a4!2z44CSNzM0LTAwNTQg5bqD5bO255yM5bqD5bO25biC5Y2X5Yy655m95a6f55S677yV5LiB55uu77yS77yQ4oiS77yZIOOCquODs-ODi-OCuOODqeWbv-WMl-S6leODleODqyAxMDA3!5e0!3m2!1sja!2sjp!4v1663320941747!5m2!1sja!2sjp" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
      </section>

      {/* 11. AMJ Section */}
      <section id="amj" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-800">AMJ（AIRBRUSH MAKEUP JAPAN）について</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            DINAIR日本正規パートナー認定団体。教育・育成・普及を目的としたAMJとの連携により、信頼ある技術とサポートを提供しています。
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 leading-relaxed">
              AMJは、エアブラシメイクの技術を日本国内で広めるとともに、その品質と安全性を担保するための団体です。DINAIRの正規パートナーとして、本場アメリカの技術を正確に伝え、日本の美容業界におけるエアブラシメイクの発展に貢献しています。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
