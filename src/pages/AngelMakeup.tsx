import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Heart } from 'lucide-react';

const FeatureCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="font-bold text-xl text-[#B50080] mb-3">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

const AngelMakeup: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-5xl text-center relative">
          <div className="mb-6">
            <Heart className="text-gray-400 w-16 h-16 mx-auto mb-4" />
            <span className="inline-block bg-gray-100 text-gray-600 px-6 py-2 rounded-full text-sm font-medium">Angel Makeup</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-700 mb-8 leading-tight">
            最後のひとときに、<br />
            <span className="text-gray-800">穏やかで美しいお姿を</span>
          </h1>
          <div className="h-1 w-24 bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
            静かに、やさしく、美しく ──<br />
            <span className="font-medium">エアブラシによる新しい死化粧のかたち</span>
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl py-12 px-4">
        
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-800">
                エアブラシによる死化粧（エンゼルメイク）
              </h2>
              <div className="h-1 w-24 bg-gray-400 mx-auto mb-8"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-xl leading-relaxed text-gray-700 text-center">
                ユリシスディーバでは、DINAIR社のエアブラシメイク技術を応用し、<br/>
                <span className="font-medium text-gray-800">故人の尊厳とご遺族の心に寄り添った「死化粧（エンゼルメイク）」</span>を提供しています。
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <p className="text-lg leading-relaxed text-gray-700">
                  お顔の血色を自然に整えたり、治療痕やアザ、肌の変色などをカバーし、<br/>
                  <span className="font-medium text-gray-800">その方らしさ</span>を大切にした<br />
                  やさしいお見送りをサポートいたします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Needs Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-800">このようなご要望にお応えします</h2>
            <div className="h-1 w-24 bg-gray-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart size={28} className="text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-800">自然な美しさの回復</h3>
                </div>
                <div className="space-y-6 text-gray-700">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="flex items-start">
                      <span className="text-3xl mr-4 mt-1">💙</span>
                      <span className="leading-relaxed">「病気や事故で顔色が変わってしまったけれど、いつものようなやさしい顔に戻してあげたい」</span>
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="flex items-start">
                      <span className="text-3xl mr-4 mt-1">🌸</span>
                      <span className="leading-relaxed">「お化粧が苦手だったあの人に、薄く自然な美しさを」</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart size={28} className="text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-800">心に残るお別れ</h3>
                </div>
                <div className="space-y-6 text-gray-700">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="flex items-start">
                      <span className="text-3xl mr-4 mt-1">✨</span>
                      <span className="leading-relaxed">「小さなアザや傷が気になるので、綺麗にしてあげたい」</span>
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="flex items-start">
                      <span className="text-3xl mr-4 mt-1">📷</span>
                      <span className="leading-relaxed">「お別れの時間、記憶に残るお姿にしたい」</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Gallery for Angel Makeup */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">穏やかで美しい仕上がり</h3>
              <div className="h-1 w-16 bg-gray-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img 
                src="/img/angel-makeup/gentle1.jpg" 
                alt="穏やかな仕上がり" 
                className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/7319329/pexels-photo-7319329.jpeg?auto=compress&cs=tinysrgb&w=400";
                }}
              />
              <img 
                src="/img/angel-makeup/natural1.jpg" 
                alt="自然な美しさ" 
                className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/6975432/pexels-photo-6975432.jpeg?auto=compress&cs=tinysrgb&w=400";
                }}
              />
              <img 
                src="/img/angel-makeup/peaceful1.jpg" 
                alt="平和な表情" 
                className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/7319330/pexels-photo-7319330.jpeg?auto=compress&cs=tinysrgb&w=400";
                }}
              />
              <img 
                src="/img/angel-makeup/serene1.jpg" 
                alt="穏やかなお別れ" 
                className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/8038897/pexels-photo-8038897.jpeg?auto=compress&cs=tinysrgb&w=400";
                }}
              />
            </div>
          </div>
        </section>

        {/* Features Section - Enhanced Visual Design */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-800 mb-6">DINAIRエアブラシの特長を活かした施術</h2>
            <div className="h-1 w-24 bg-gray-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-gray-600 text-2xl">🌸</span>
              </div>
              <h3 className="font-bold text-xl text-gray-700 mb-4">自然な血色の再現</h3>
              <p className="text-gray-600 leading-relaxed">霧状に吹き付けることで、まるで生前のようなやわらかな肌色を演出します。</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-gray-600 text-2xl">🌿</span>
              </div>
              <h3 className="font-bold text-xl text-gray-700 mb-4">傷跡や変色のカバー</h3>
              <p className="text-gray-600 leading-relaxed">薄づきで高いカバー力を発揮。肌に優しい水性ファンデーションを使用します。</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-gray-600 text-2xl">⏰</span>
              </div>
              <h3 className="font-bold text-xl text-gray-700 mb-4">迅速な対応</h3>
              <p className="text-gray-600 leading-relaxed">短時間で広範囲に施術ができるため、病院や式場など時間のない現場でもスムーズに対応可能です。</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-gray-600 text-2xl">📸</span>
              </div>
              <h3 className="font-bold text-xl text-gray-700 mb-4">高精細な見送りにも</h3>
              <p className="text-gray-600 leading-relaxed">写真や映像で撮影されても、自然で美しい仕上がりです。</p>
            </div>
          </div>
        </section>

        {/* Flow and Price Section */}
        <section className="mb-16">
            <h2 className="text-3xl font-serif text-center mb-8">サービスの流れとご料金</h2>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="font-bold text-xl mb-4">サービスの流れ</h3>
                        <ol className="relative border-l border-gray-200 space-y-10 ml-2">
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full -left-3 ring-4 ring-white">1</span>
                                <h4 className="font-bold">ヒアリング</h4>
                                <p className="text-sm text-gray-600">ご希望の仕上がりや気になる部位を事前にお伺いします。</p>
                            </li>
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full -left-3 ring-4 ring-white">2</span>
                                <h4 className="font-bold">色調整・施術</h4>
                                <p className="text-sm text-gray-600">故人のお肌の状態に合わせて色を調合し、自然な血色と質感を再現します。</p>
                            </li>
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full -left-3 ring-4 ring-white">3</span>
                                <h4 className="font-bold">最終チェック</h4>
                                <p className="text-sm text-gray-600">ご遺族の方と仕上がりを確認し、必要に応じて調整を行います。</p>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-4">ご料金の目安</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex justify-between border-b pb-1"><span>顔全体の整肌・血色補正</span><span className="font-mono">¥22,000〜</span></li>
                            <li className="flex justify-between border-b pb-1"><span>アザ・傷跡などの部分カバー</span><span className="font-mono">¥11,000〜</span></li>
                            <li className="flex justify-between"><span>出張費・時間指定など</span><span className="font-mono">別途お見積り</span></li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-4">※上記は税込価格です。施術内容・範囲によって変動します。詳細は個別にご相談ください。</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonial - Enhanced Design */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-10 rounded-3xl shadow-xl text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-500 text-2xl">💙</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-6">ご遺族様からのお声</h3>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 italic text-xl leading-relaxed mb-6">
                「最期のお別れのとき、家族みんなが<br/>
                "〇〇さんらしい笑顔だったね"と話してくれました。<br/>
                頼んで本当によかったです。」
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="h-1 w-8 bg-gray-300 rounded"></div>
                <p className="font-semibold text-gray-700">ご遺族様の声</p>
                <div className="h-1 w-8 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* A (Action) */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6">ご相談・ご依頼について</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              ご葬儀社・式場・ご遺族様からの直接のご依頼も承っております。まずはお電話、またはお問い合わせフォームより、お気軽にご連絡ください。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0908709993" className="inline-flex items-center bg-[#B50080] text-white hover:bg-[#a10070] px-8 py-3 rounded-full font-medium transition-colors duration-300 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                お電話で相談する
              </a>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-gray-100 text-gray-800 hover:bg-gray-200 px-8 py-3 rounded-full font-medium transition-colors duration-300 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                フォームで相談する
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AngelMakeup;
