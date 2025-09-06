import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Mail } from 'lucide-react';

const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
    <span>{children}</span>
  </li>
);

const ComplexCover: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B50080]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B50080]/3 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-5xl text-center relative">
          <div className="mb-6">
            <span className="inline-block bg-[#B50080]/10 text-[#B50080] px-6 py-2 rounded-full text-sm font-medium mb-4">Complex Cover</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-[#B50080] mb-8 leading-tight">
            肌のお悩み、<br />
            <span className="text-gray-800">諦めていませんか？</span>
          </h1>
          <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
            タトゥー、アザ、傷跡、ニキビ跡など、<br />
            <span className="font-medium">あなたのコンプレックスを自信に変える</span>エアブラシメイク
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl py-12 px-4">
        {/* P (Problem) */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800 leading-tight">
              特別な日を心から楽しめずにいませんか？
            </h2>
            <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              結婚式や成人式、特別なイベント、旅行、写真撮影など、<br />
              肌を出す機会があるけれど…
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative">
              <img 
                src="/img/complex-cover/before1.jpg" 
                alt="施術前の様子" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800";
                }}
              />
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#B50080]/5 to-[#B50080]/10 border-l-4 border-[#B50080] p-6 rounded-r-2xl">
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-start">
                    <span className="text-[#B50080] text-lg mr-3 mt-1">•</span>
                    <span>「この<strong className="text-[#B50080]">タトゥー</strong>だけ、その日だけでも隠したい…」</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-[#B50080] text-lg mr-3 mt-1">•</span>
                    <span>「<strong className="text-[#B50080]">背中のニキビ跡</strong>や<strong className="text-[#B50080]">傷跡</strong>が気になって、着たいドレスを選べない…」</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-[#B50080] text-lg mr-3 mt-1">•</span>
                    <span>「生まれつきの<strong className="text-[#B50080]">アザ</strong>や濃い<strong className="text-[#B50080]">シミ</strong>を見られるのが恥ずかしい…」</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-[#B50080] text-lg mr-3 mt-1">•</span>
                    <span>「<strong className="text-[#B50080]">白斑</strong>や<strong className="text-[#B50080]">肌の変色</strong>を自然にカバーしたい」</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg leading-relaxed mb-6 text-center">
              このようなお悩みを抱え、<br />
              <span className="text-2xl font-medium text-gray-800">「自分ではどうすることもできない」</span><br />
              と諦めかけていませんか？
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-base leading-relaxed text-gray-600 text-center">
                近年の4K・8Kといった高画質カメラや映像技術の進化により、従来のコンシーラーや厚塗りメイクでは、かえってカバーした部分が目立ってしまうことがあります。<br /><br />
                ユリシスディーバでは、これらの<strong className="text-[#B50080]">肌のお悩みを自然にカバー</strong>し、あなたが<span className="font-medium text-gray-800">心から特別な日を楽しめる</span>ようサポートします。
              </p>
            </div>
          </div>
        </section>

        {/* A (Affinity) */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
                あなたのそのお悩み、<br />
                <span className="text-[#B50080]">よく分かります</span>
              </h2>
              <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-[#B50080]/5 border border-[#B50080]/20 rounded-2xl p-8 mb-8">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-[#B50080]/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-[#B50080] text-2xl font-bold">"</span>
                  </div>
                </div>
                <div className="space-y-4 text-lg text-gray-700 italic text-center">
                  <p>「自分にしかわからない、誰にも相談できない悩みだと思っていた…」</p>
                  <p>「肌のせいで、楽しみにしていたイベントに心から集中できなかった…」</p>
                </div>
                <p className="text-center text-gray-600 mt-6 font-medium">
                  そう語ってくださるお客様は少なくありません。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#B50080]/20 to-transparent rounded-2xl transform -rotate-3"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="/img/staff/staff1.jpg" 
                      alt="代表 須美ひろ江" 
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=800";
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    ユリシスディーバ代表の<span className="font-medium text-gray-800">須美ひろ江</span>自身も、適応障害や抜毛症といった辛い経験、そして弟様の死という深い悲しみの中で、肌の悩みやコンプレックスが心にどれほど重くのしかかるかを身をもって経験しました。
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    だからこそ、肌の悩みを<strong className="text-[#B50080]">単に「隠す」のではなく</strong>、「<strong className="text-[#B50080]">自分らしく、自信を持って輝ける</strong>」ように、そして「<strong className="text-[#B50080]">笑顔</strong>」になっていただくことを何よりも大切にしています。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 mt-8 border border-gray-200">
                <div className="text-center">
                  <p className="text-xl leading-relaxed text-gray-700 mb-4">
                    私たちは、一人ひとりのお悩みに真摯に向き合い、
                  </p>
                  <p className="text-2xl font-serif text-[#B50080] mb-4">
                    「ハッピーエアブラシ」
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    という言葉に込められた<br />
                    「<span className="font-medium text-gray-800">魔法をかけたように、その人の魅力を最大限に引き出す</span>」<br />
                    お手伝いをしたいと考えています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S (Solution) */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-800 leading-tight">
              解決策は、DINAIRエアブラシによる<br />
              <span className="text-[#B50080]">「薄づきなのに高カバー力」</span>
            </h2>
            <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/img/complex-cover/flow-seratct-img2.jpg" 
                  alt="エアブラシ施術風景" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/3373737/pexels-photo-3373737.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
                <img 
                  src="/img/complex-cover/flow-img1.jpg" 
                  alt="施術機材" 
                  className="w-full h-32 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
                <img 
                  src="/img/complex-cover/flow-seratct-img6.jpg" 
                  alt="美しい仕上がり" 
                  className="w-full h-32 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
                <img 
                  src="/img/complex-cover/after2.jpg" 
                  alt="自然な仕上がり" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/7794435/pexels-photo-7794435.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#B50080]/5 to-transparent rounded-3xl -z-10 transform -rotate-2"></div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">DINAIR技術の特徴</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <span className="font-medium text-gray-800">霧状の非常に細かい粒子</span>になったファンデーションを、お肌から離した状態で空気の力を使って<span className="text-[#B50080] font-medium">優しく吹き付け</span>ていきます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-medium text-gray-800">薄い層を何層も重ねて</span>カバー力を高めることで、<span className="text-[#B50080] font-medium">厚塗り感がなく、まるで自分の肌のように自然</span>な仕上がりを実現します。
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-[#B50080] text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">肌に優しい</h3>
              <p className="text-gray-600 text-sm leading-relaxed">85%以上が水分でできた肌に優しいナチュラルシリーズで、敏感肌の方も安心</p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-[#B50080] text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">高いカバー力</h3>
              <p className="text-gray-600 text-sm leading-relaxed">シミ、ニキビ跡、傷跡、濃いタトゥーまで自然な見た目でしっかりカバー</p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-[#B50080] text-2xl">📹</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">高精細メディア対応</h3>
              <p className="text-gray-600 text-sm leading-relaxed">4K・8K撮影でもカバー部分が白く浮き上がることなく美しい仕上がり</p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-[#B50080] text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">崩れにくい</h3>
              <p className="text-gray-600 text-sm leading-relaxed">汗や水にも強い耐水性で、特別な一日も安心して過ごせます</p>
            </div>
          </div>
        </section>

        {/* P (Proof) */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">施術事例のご紹介</h2>
            <div className="h-1 w-24 bg-[#B50080] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              これまで、多くのお客様のお悩みにエアブラシメイクでお応えしてきました。
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/complex-cover/seacret-ba1-1.jpg" 
                  alt="結婚式での施術例" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=600";
                  }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#B50080]/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#B50080] text-lg">👰</span>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-800">結婚式</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  背中のニキビ跡を自然にカバーし、ウェディングドレス姿に自信を持って挙式に臨めたお客様がいらっしゃいます。
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/tatoo-cover/tatoo2.jpg" 
                  alt="旅行・温泉での施術例" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/7794435/pexels-photo-7794435.jpeg?auto=compress&cs=tinysrgb&w=600";
                  }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#B50080]/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#B50080] text-lg">🏖️</span>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-800">旅行・温泉</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  太ももや腕などのタトゥーを一時的にカバーし、旅行先での温泉やプールを楽しめたお客様の例があります。
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/complex-cover/before2.jpg" 
                  alt="写真撮影での施術例" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600";
                  }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#B50080]/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#B50080] text-lg">📸</span>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-800">写真撮影</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  白斑や肌の変色箇所を自然にカバーし、均一で美しい肌で撮影できたケースがあります。メディア撮影にも対応できるクオリティです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* C (Contents) */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">施術の流れ</h2>
          <ol className="relative border-l border-gray-200 space-y-10 ml-4">
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">1</span>
              <h3 className="font-bold text-xl mb-2">初回カウンセリング</h3>
              <p className="text-gray-600">カバーしたい部位、範囲、<strong className="text-[#B50080]">イベントの種類</strong>（結婚式、旅行、身体検査など）、ご希望の仕上がりなどを詳細にお伺いします。肌の状態を拝見し、最適なカバー方法をご提案します。</p>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">2</span>
              <h3 className="font-bold text-xl mb-2">事前リハーサル（ご希望に応じて）</h3>
              <p className="text-gray-600">実際の施術に使用するファンデーションの色合わせを行い、仕上がりのイメージをご確認いただけます。初めての方でも安心して本番を迎えられます。</p>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">3</span>
              <h3 className="font-bold text-xl mb-2">ご成約・お振込み</h3>
              <p className="text-gray-600">施術内容、料金、日時、場所などを確認・確定します。</p>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">4</span>
              <h3 className="font-bold text-xl mb-2">シェービング</h3>
              <p className="text-gray-600">施術箇所は、より美しい仕上がりのために事前に（通常2日前までに）シェービングをお願いしています。</p>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">5</span>
              <h3 className="font-bold text-xl mb-2">施術当日</h3>
              <p className="text-gray-600">ご予約いただいた場所（サロンまたは出張）にて、経験豊富な技術者がお悩みの箇所を丁寧にカバーしていきます。状態に合わせて<strong className="text-[#B50080]">お肌の色を調合・調整</strong>し、<strong className="text-[#B50080]">薄く重ねて肌に馴染ませる</strong>ように仕上げます。</p>
            </li>
          </ol>
        </section>

        {/* O (Offer) */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">料金の目安</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h3 className="font-bold text-xl mb-4 text-[#B50080]">ニキビ跡・傷跡カバー</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b pb-1"><span>ハガキサイズ</span><span className="font-mono">¥5,500</span></li>
                  <li className="flex justify-between border-b pb-1"><span>B5サイズ</span><span className="font-mono">¥11,000</span></li>
                  <li className="flex justify-between border-b pb-1"><span>A4サイズ</span><span className="font-mono">¥16,500</span></li>
                  <li className="flex justify-between border-b pb-1"><span>デコルテ</span><span className="font-mono">¥22,000〜</span></li>
                  <li className="flex justify-between border-b pb-1"><span>背中全体</span><span className="font-mono">¥33,000〜</span></li>
                  <li className="flex justify-between border-b pb-1"><span>腕（片方）</span><span className="font-mono">¥16,500〜</span></li>
                  <li className="flex justify-between"><span>腕（両方）</span><span className="font-mono">¥33,000〜</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-[#B50080]">タトゥーカバー</h3>
                <ul className="space-y-2">
                    <li className="flex justify-between border-b pb-1"><span>ハガキサイズ</span><span className="font-mono">¥11,000</span></li>
                    <li className="flex justify-between border-b pb-1"><span>B5サイズ</span><span className="font-mono">¥22,000</span></li>
                    <li className="flex justify-between border-b pb-1"><span>背中(肩甲骨から上片側)</span><span className="font-mono">¥33,000〜</span></li>
                    <li className="flex justify-between border-b pb-1"><span>背中全体</span><span className="font-mono">¥55,000〜</span></li>
                    <li className="flex justify-between border-b pb-1"><span>腕（片方）</span><span className="font-mono">¥22,000〜</span></li>
                    <li className="flex justify-between"><span>腕（両方）</span><span className="font-mono">¥33,000〜</span></li>
                </ul>
              </div>
              <div className="md:col-span-2 mt-4">
                  <h3 className="font-bold text-xl mb-4 text-[#B50080]">専属対応</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between border-b pb-1"><span>5時間</span><span className="font-mono">¥77,000〜</span></li>
                    <li className="flex justify-between"><span>8時間</span><span className="font-mono">¥110,000〜</span></li>
                  </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              ※上記は税込価格の目安です。タトゥーの<strong className="text-gray-600">トライバル柄</strong>や<strong className="text-gray-600">多色使い</strong>、<strong className="text-gray-600">サイズ</strong>、<strong className="text-gray-600">お肌の色</strong>などにより料金は変動します。<br/>
              ※タトゥーや傷跡の<strong className="text-gray-600">凹凸</strong>は完全に隠しきれない場合があります（色合いはカバーできます）。<br/>
              ※衣類やマスクなどとの<strong className="text-gray-600">摩擦により、まれに色移り</strong>することがあります。
            </p>
          </div>
        </section>

        {/* N (Narrowing down) */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">こんな方に特におすすめです</h2>
          <ul className="space-y-4 text-lg">
            <CheckListItem><strong>ウェディング</strong>や<strong>成人式</strong>、<strong>記念写真撮影</strong>などで、ドレスや和装などによって肌を露出する予定がある方。</CheckListItem>
            <CheckListItem><strong>温泉</strong>や<strong>プール</strong>、<strong>海</strong>など、水辺でのイベントや旅行を控えている方。</CheckListItem>
            <CheckListItem><strong>オーディション</strong>や<strong>面接</strong>、<strong>身体検査</strong>などで、一時的にタトゥーなどを隠す必要がある方。</CheckListItem>
            <CheckListItem><strong>アトピー</strong>など、<strong>通常のメイクが難しい肌状態</strong>の方でも、安心して自然なカバーメイクをしたい方。</CheckListItem>
            <CheckListItem>肌のコンプレックスに囚われず、<strong>大切な一日を心から楽しみたい</strong>方。</CheckListItem>
          </ul>
        </section>

        {/* A (Action) */}
        <section className="py-12 bg-[#B50080] text-white rounded-lg">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6">まずはお気軽にご相談ください！</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              「私のこの悩み、エアブラシで対応できる？」「どのくらいの範囲で、どのくらい自然に隠せるの？」「特別な日までに間に合う？」
            </p>
            <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto">
              どんな些細な疑問や不安にも、経験豊富なスタッフが丁寧にお応えし、最適なプランをご提案いたします。一人で悩まず、ぜひ一度ご相談ください。あなたのコンプレックスを笑顔に変えるお手伝いをさせていただきます。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-[#B50080] hover:bg-pink-100 px-8 py-3 rounded-full font-medium transition-colors duration-300 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                ご予約・ご相談はこちら
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ComplexCover;
