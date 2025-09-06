import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Phone, Mail } from 'lucide-react';

const BenefitItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start text-lg">
    <div className="bg-pink-100 text-[#B50080] rounded-full p-1 mr-4 mt-1">
        <Check size={16} />
    </div>
    <span>{children}</span>
  </li>
);

const BodyJewelry: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B50080]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#B50080]/3 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative">
          <div className="mb-6">
            <span className="inline-block bg-[#B50080]/10 text-[#B50080] px-6 py-2 rounded-full text-sm font-medium mb-4">Body Jewelry</span>
          </div>
          <p className="text-lg text-gray-600 mb-4 font-light">大切なイベント、記憶に残る瞬間に。</p>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-8 leading-tight">
            特別な日を、肌に描く<br />
            <span className="text-[#B50080]">あなただけの輝き</span>
          </h1>
          <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
            コンプレックスを自信に変え、あなたを主役にする<br />
            <span className="font-medium">魔法のボディアート</span>
          </p>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            経験豊富なプロの技術で、肌の悩みを気にせず、内面から輝く最高のあなたを引き出します。
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl py-12 px-4">
        {/* P (Problem) & A (Affinity) */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800 leading-tight">
              特別な日、肌の悩みで<br />
              <span className="text-[#B50080]">心から楽しめていますか？</span>
            </h2>
            <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#B50080]/5 to-[#B50080]/10 border border-[#B50080]/20 rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-gray-800 mb-6 text-center">こんなお悩みはありませんか？</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-start">
                    <span className="text-[#B50080] text-2xl mr-3">👗</span>
                    <span>結婚式でドレスを着たいけれど、背中のニキビ跡や傷が気になる</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-[#B50080] text-2xl mr-3">🎭</span>
                    <span>ファッションショーや舞台で肌を見せる機会があるけれど、タトゥーを隠したい</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-[#B50080] text-2xl mr-3">✨</span>
                    <span>何か人とは違う方法で、自分をもっと華やかに見せたい</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/img/body-jewelry/body1.jpg" 
                    alt="ボディジュエリーの美しい仕上がり" 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }}
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/img/body-jewelry/body2.jpg" 
                    alt="スワロフスキーを使った装飾" 
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/8038896/pexels-photo-8038896.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }}
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/img/body-jewelry/body3.jpg" 
                    alt="背中のボディジュエリーアート" 
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/6975433/pexels-photo-6975433.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }}
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/img/body-jewelry/body4.jpg" 
                    alt="結婚式用ボディジュエリー" 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/8038898/pexels-photo-8038898.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <span className="text-4xl mb-4 block">🤝</span>
              <h3 className="text-2xl font-serif text-gray-800">そのお悩み、深く理解しています</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 text-center max-w-3xl mx-auto">
              肌のコンプレックスがあることで自信が持てず、せっかくの晴れ舞台を心から楽しめない…<br />
              そんな経験をされているかもしれません。<br /><br />
              <span className="font-medium text-gray-800">一時的にでもその悩みを解消し、最高の笑顔で大切な日を迎えていただきたい</span><br />
              と心から願っています。
            </p>
          </div>
        </section>

        {/* S (Solution) & B (Benefit) */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-800 leading-tight">
              解決策は、肌に描く<br />
              <span className="text-[#B50080]">あなただけの輝き</span>
            </h2>
            <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <div className="max-w-xl bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <p className="text-xl leading-relaxed text-gray-700">
                  そこで私たちが提案するのが、<span className="font-medium text-gray-800">肌に直接アートを描くボディジュエリー</span>です。<br /><br />
                  エアブラシなどの専用技術と肌に優しい材料を使い、一時的に肌悩みをカバーしつつ、<br />
                  <span className="text-[#B50080] font-medium">ラメやスワロフスキーの輝きで肌を彩る</span>新しいアプローチです。<br /><br />
                  <span className="font-medium text-gray-800">痛みなく、あなたをより美しく引き立てるための解決策</span>となります。
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/img/body-jewelry/process1.jpg" 
                    alt="ボディジュエリー制作過程" 
                    className="w-full h-40 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }}
                  />
                  <img 
                    src="/img/body-jewelry/glitter1.jpg" 
                    alt="ラメとスワロフスキーの輝き" 
                    className="w-full h-32 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/8038899/pexels-photo-8038899.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }}
                  />
                </div>
                <div className="space-y-4 pt-6">
                  <img 
                    src="/img/body-jewelry/design1.jpg" 
                    alt="デザイン例" 
                    className="w-full h-32 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/8038900/pexels-photo-8038900.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }}
                  />
                  <img 
                    src="/img/body-jewelry/finish1.jpg" 
                    alt="完成した美しい仕上がり" 
                    className="w-full h-40 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/6975434/pexels-photo-6975434.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <span className="text-4xl mb-4 block">✨</span>
              <h3 className="text-3xl font-serif text-gray-800 mb-6">ボディジュエリーがもたらす、素晴らしい変化</h3>
              <div className="h-1 w-16 bg-[#B50080] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#B50080] text-3xl mb-4">🌟</div>
                <h4 className="text-xl font-medium text-gray-800 mb-3">自信を持って大切な日を迎える</h4>
                <p className="text-gray-600">肌の悩みを気にせず、<strong className="text-[#B50080]">自信を持って大切な日を迎えられます</strong>。あなた本来の美しさが輝きます。</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#B50080] text-3xl mb-4">🎨</div>
                <h4 className="text-xl font-medium text-gray-800 mb-3">世界に一つだけのデザイン</h4>
                <p className="text-gray-600">イベントや衣装に合わせた、<strong className="text-[#B50080]">世界に一つだけのオリジナルデザイン</strong>で個性を表現できます。</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#B50080] text-3xl mb-4">💎</div>
                <h4 className="text-xl font-medium text-gray-800 mb-3">宝石のような輝き</h4>
                <p className="text-gray-600">宝石のようなキラキラとした輝きで、より一層<strong className="text-[#B50080]">華やかで魅力的な印象</strong>になれます。</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#B50080] text-3xl mb-4">🛡️</div>
                <h4 className="text-xl font-medium text-gray-800 mb-3">肌に優しい安全性</h4>
                <p className="text-gray-600">肌に優しい<strong className="text-[#B50080]">FDA認証のグルーを使用</strong>するので、安心して施術を受けられます。</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#B50080] text-3xl mb-4">⏰</div>
                <h4 className="text-xl font-medium text-gray-800 mb-3">長時間持続</h4>
                <p className="text-gray-600">汗やシャワーでも落ちにくく、<strong className="text-[#B50080]">数日間輝きが持続</strong>します。特別な期間中ずっと美しく。</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#B50080] text-3xl mb-4">🎭</div>
                <h4 className="text-xl font-medium text-gray-800 mb-3">自由な表現</h4>
                <p className="text-gray-600">まるで本物のアクセサリーのように、<strong className="text-[#B50080]">身体中のどこにでも</strong>身につけられます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* E (Evidence) */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-6 text-gray-800">信頼の実績</h2>
            <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                <Star className="text-yellow-400 w-12 h-12 mx-auto mb-4" fill="currentColor" />
                <h3 className="font-bold text-xl text-[#B50080] mb-3">受賞歴・講師経験</h3>
                <p className="text-gray-600">ミス・ユニバース・ジャパン広島公認スポンサー・ビューティー講師の経験や、韓国のボディペインティングフェスティバルでの受賞歴があります。</p>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B50080] text-2xl">💬</span>
                </div>
                <h3 className="font-bold text-xl text-[#B50080] mb-3">お客様の声</h3>
                <p className="text-gray-600 italic">「〇〇さん（施術者名）に会えば元気になれる！いつでも綺麗になることができる！」</p>
                <p className="text-gray-600 italic mt-2">「経験したいろんなことが今の私の基礎になっています」</p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-serif text-center mb-8 text-gray-800">美しい施術例ギャラリー</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group">
                <img 
                  src="/img/body-jewelry/example1.jpg" 
                  alt="結婚式用ボディジュエリー" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">結婚式用デザイン</p>
                </div>
              </div>
              
              <div className="relative group">
                <img 
                  src="/img/body-jewelry/example2.jpg" 
                  alt="背中のボディアート" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/8038896/pexels-photo-8038896.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">背中アートデザイン</p>
                </div>
              </div>
              
              <div className="relative group">
                <img 
                  src="/img/body-jewelry/example3.jpg" 
                  alt="肩のスワロフスキー装飾" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/6975433/pexels-photo-6975433.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">スワロフスキー装飾</p>
                </div>
              </div>
              
              <div className="relative group">
                <img 
                  src="/img/body-jewelry/example4.jpg" 
                  alt="腕のエレガントなデザイン" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/8038898/pexels-photo-8038898.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">腕のエレガントデザイン</p>
                </div>
              </div>
              
              <div className="relative group">
                <img 
                  src="/img/body-jewelry/example5.jpg" 
                  alt="首元の繊細なアート" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/8038899/pexels-photo-8038899.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">首元の繊細アート</p>
                </div>
              </div>
              
              <div className="relative group">
                <img 
                  src="/img/body-jewelry/example6.jpg" 
                  alt="足首のボディジュエリー" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/6975434/pexels-photo-6975434.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">足首デザイン</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C (Contents) */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-6 text-gray-800">サービス内容</h2>
            <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-bold text-2xl mb-4 text-[#B50080]">ボディジュエリーとは？</h3>
                <p className="text-gray-600 leading-relaxed">肌に専用の接着のり（グルー）でデザインを描き、ラメパウダーやスワロフスキーなどで装飾するボディアートです。FDA（食品医薬品局）認証のグルーを使用するため、肌に優しく、肌荒れの心配もほとんどありません。汗に強く、シャワーでも落ちないので、通常3日から7日程度美しい輝きが持続します。</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/img/body-jewelry/materials1.jpg" 
                alt="FDA認証グルー" 
                className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800";
                }}
              />
              <img 
                src="/img/body-jewelry/swarovski1.jpg" 
                alt="スワロフスキークリスタル" 
                className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/8038900/pexels-photo-8038900.jpeg?auto=compress&cs=tinysrgb&w=800";
                }}
              />
              <img 
                src="/img/body-jewelry/powder1.jpg" 
                alt="ラメパウダー" 
                className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/8038899/pexels-photo-8038899.jpeg?auto=compress&cs=tinysrgb&w=800";
                }}
              />
              <img 
                src="/img/body-jewelry/tools1.jpg" 
                alt="施術用具" 
                className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/6975434/pexels-photo-6975434.jpeg?auto=compress&cs=tinysrgb&w=800";
                }}
              />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif text-gray-800">施術の流れ</h3>
            <div className="h-1 w-16 bg-[#B50080] mx-auto mt-4"></div>
          </div>
          <ol className="relative border-l border-gray-200 space-y-10 ml-4">
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">1</span>
              <h4 className="font-bold text-xl mb-2">デザイン相談</h4>
              <p className="text-gray-600">オリジナルデザイン制作、または既存デザインの中からお選びいただけます。</p>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">2</span>
              <h4 className="font-bold text-xl mb-2">パッチテスト</h4>
              <p className="text-gray-600">お肌が弱い方でも安心していただくために、事前にパッチテストを行います。</p>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">3</span>
              <h4 className="font-bold text-xl mb-2">デザイン打ち合わせ</h4>
              <p className="text-gray-600">作成したデザインを元に、細かな調整を行います。</p>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">4</span>
              <h4 className="font-bold text-xl mb-2">施術</h4>
              <p className="text-gray-600">通常、イベント前日などに当サロン（広島市南区皆実町）にてマンツーマンで施術を行います。</p>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">5</span>
              <h4 className="font-bold text-xl mb-2">当日装飾</h4>
              <p className="text-gray-600">スワロフスキーなど立体的な装飾がある場合は、イベント当日に式場などへお伺いして取り付けを行います。</p>
            </li>
          </ol>
        </section>

        {/* O (Offer) & N (Narrow) */}
        <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h2 className="text-3xl font-serif text-center mb-6">料金と対象となる方</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-xl mb-3 text-[#B50080]">料金について</h3>
                        <p className="text-gray-600 mb-4">お客様一人ひとりのデザインやご要望に合わせてお見積もりいたします。世界に一つだけのオリジナルデザイン制作も可能です。</p>
                        <p className="text-gray-600 font-bold bg-pink-100 p-3 rounded-lg">プロカメラマンによる写真撮影データをご提供いただける場合、オリジナルデザイン費が無料になる特典もございます。</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-3 text-[#B50080]">こんな方におすすめ</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex"><Check size={20} className="text-pink-500 mr-2 flex-shrink-0"/>結婚式やパーティーを控えている方</li>
                            <li className="flex"><Check size={20} className="text-pink-500 mr-2 flex-shrink-0"/>肌のコンプレックスをカバーしたい方</li>
                            <li className="flex"><Check size={20} className="text-pink-500 mr-2 flex-shrink-0"/>ワンランク上の美しさを手に入れたい方</li>
                            <li className="flex"><Check size={20} className="text-pink-500 mr-2 flex-shrink-0"/>オリジナリティあるアートを求めている方</li>
                            <li className="flex"><Check size={20} className="text-pink-500 mr-2 flex-shrink-0"/>最高の自分で、自信を持って輝きたい方</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* A (Action) */}
        <section className="py-12 bg-[#B50080] text-white rounded-lg">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6">あなたもボディジュエリーで、<br/>特別な日を最高の輝きで彩りませんか？</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              肌の悩みやイベントについて、まずはお気軽にご相談ください。住川があなたの「こうなりたい」をお伺いし、最適なプランをご提案いたします。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="tel:09087109993" className="inline-flex items-center bg-white text-[#B50080] hover:bg-pink-100 px-8 py-3 rounded-full font-medium transition-colors duration-300 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                090-8710-9993
              </a>
              <Link to="/contact" className="inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors duration-300 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                メールで相談する
              </Link>
            </div>
            <p className="text-sm text-white/80 italic">
              追伸: ボディジュエリーは、あなたの内なる輝きを引き出し、最高の瞬間をサポートする技術です。経済的な豊かさだけでなく、心の充実感をもたらし、あなた自身を、そして周りの人をも笑顔にできる、そんな力を持っています。ぜひ一度、体験してみてください。
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default BodyJewelry;
