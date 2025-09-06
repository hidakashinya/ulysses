import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Mail } from 'lucide-react';

const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <CheckCircle className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
    <span>{children}</span>
  </li>
);

const TattooCover: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#B50080] mb-4">タトゥーカバー</h1>
          <p className="text-lg md:text-xl text-gray-600">
            その日だけ、タトゥーを隠したい。その想いに、プロの技術でお応えします。
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl py-12 px-4">
        {/* P (Problem) */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">こんなことで悩んでいませんか？</h2>
          <p className="text-lg leading-relaxed mb-6">
            結婚式、温泉旅行、就職活動、家族とのイベント...。大切なその日のために、タトゥーを一時的に隠したいという切実な悩み。
          </p>
          <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg mb-6">
            <ul className="space-y-3 text-gray-700">
              <li>「結婚式でウェディングドレスを着るのに、<strong className="text-[#B50080]">背中のタトゥー</strong>が気になる…」</li>
              <li>「家族や友人と<strong className="text-[#B50080]">温泉旅行</strong>に行きたいけど、タトゥーのせいで断っている…」</li>
              <li>「<strong className="text-[#B50080]">就職活動の面接</strong>や<strong className="text-[#B50080]">健康診断</strong>で、不必要な誤解をされたくない…」</li>
              <li>「子供の<strong className="text-[#B50080]">プール参観</strong>で、他の親の目が気になる…」</li>
            </ul>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            シールやコンシーラーではうまく隠せなかったり、服に色移りしてしまったり。自分一人で解決するのは難しい問題です。
          </p>
        </section>

        {/* A (Affinity) */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-serif text-center mb-8">そのお気持ち、お察しします</h2>
          <p className="text-lg leading-relaxed mb-6">
            タトゥーがあることで、大切な人との時間を心から楽しめなかったり、将来の可能性を狭めてしまうのではないかと不安に感じたり…。
          </p>
          <p className="text-base leading-relaxed text-gray-600 mb-6">
            代表の須美ひろ江自身も、弟様がタトゥーを入れていた経験から、タトゥーに対する社会の目や、それによって生じる悩みを身近に感じてきました。だからこそ、私たちはタトゥーの是非を問うのではなく、<strong className="text-[#B50080]">「隠したい」というお客様の気持ちに寄り添い</strong>、その日一日を最高の笑顔で過ごしていただくためのお手伝いをしたいと強く願っています。
          </p>
        </section>

        {/* S (Solution) */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">解決策は、DINAIRエアブラシによる<br className="md:hidden"/>「高耐久・高耐水」のカバー技術</h2>
          <p className="text-lg leading-relaxed mb-8">
            DINAIRのタトゥーカバーは、<strong className="text-[#B50080]">耐久性・耐水性・耐摩耗性に優れたアルコールベース</strong>の専用ファンデーションを使用します。霧状の細かい粒子を薄く何層にも重ねることで、<strong className="text-[#B50080]">汗や水に強く、衣服にも擦れにくい</strong>、自然で美しい仕上がりを実現します。
          </p>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <span className="text-4xl mb-4 block">✨</span>
              <h3 className="text-3xl font-serif text-gray-800 mb-6">DINAIRタトゥーカバーの4つの特長</h3>
              <div className="h-1 w-16 bg-[#B50080] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#B50080] text-2xl">🎨</span>
                </div>
                <h4 className="text-xl font-medium text-gray-800 mb-3">自然な仕上がり</h4>
                <p className="text-gray-600 leading-relaxed">お客様の肌の色に合わせて<strong className="text-[#B50080]">ミリ単位で色を調合</strong>。境目がわからないほど自然に馴染ませます。</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#B50080] text-2xl">💪</span>
                </div>
                <h4 className="text-xl font-medium text-gray-800 mb-3">高いカバー力</h4>
                <p className="text-gray-600 leading-relaxed"><strong className="text-[#B50080]">黒や色の濃いタトゥー</strong>、広範囲のタトゥーにも対応。厚塗り感なくしっかりカバーします。</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#B50080] text-2xl">💧</span>
                </div>
                <h4 className="text-xl font-medium text-gray-800 mb-3">優れた持続性</h4>
                <p className="text-gray-600 leading-relaxed">耐水性・耐久性に優れ、<strong className="text-[#B50080]">温泉やプールに入っても落ちません</strong>。長時間のイベントでも安心です。</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#B50080]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#B50080] text-2xl">🌿</span>
                </div>
                <h4 className="text-xl font-medium text-gray-800 mb-3">肌への優しさ</h4>
                <p className="text-gray-600 leading-relaxed">施術は非接触型で衛生的。専用リムーバーで優しく落とせます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* C (Contents) & O (Offer) */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">施術の流れと料金</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-bold text-xl mb-4 text-center">施術の流れ</h3>
            <ol className="relative border-l border-gray-200 space-y-10 ml-4 mb-12">
                <li className="ml-8"><span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">1</span><strong className="font-bold">カウンセリング</strong><p className="text-sm text-gray-600">タトゥーの状態、範囲、イベントの種類などを伺い、最適なプランを提案します。</p></li>
                <li className="ml-8"><span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">2</span><strong className="font-bold">リハーサル(推奨)</strong><p className="text-sm text-gray-600">色合わせと仕上がりを確認。安心して本番を迎えられます。</p></li>
                <li className="ml-8"><span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">3</span><strong className="font-bold">施術当日</strong><p className="text-sm text-gray-600">サロンまたは出張先で丁寧に施術。凹凸なども目立たないよう仕上げます。</p></li>
            </ol>
            <h3 className="font-bold text-xl mb-4 text-center">料金の目安</h3>
            <div className="max-w-2xl mx-auto">
                <ul className="space-y-2">
                    <li className="flex justify-between border-b pb-1"><span>名刺サイズ</span><span className="font-mono">¥11,000〜</span></li>
                    <li className="flex justify-between border-b pb-1"><span>ハガキサイズ</span><span className="font-mono">¥16,500〜</span></li>
                    <li className="flex justify-between border-b pb-1"><span>B5サイズ</span><span className="font-mono">¥22,000〜</span></li>
                    <li className="flex justify-between border-b pb-1"><span>A4サイズ</span><span className="font-mono">¥33,000〜</span></li>
                    <li className="flex justify-between border-b pb-1"><span>背中半分</span><span className="font-mono">¥44,000〜</span></li>
                    <li className="flex justify-between"><span>背中全体</span><span className="font-mono">¥66,000〜</span></li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                ※上記は税込価格の目安です。タトゥーの色（黒一色か多色か）、デザイン（トライバル柄など）、凹凸の有無により料金は変動します。
                </p>
            </div>
          </div>
        </section>

        {/* N (Narrowing down) */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">こんなシーンで選ばれています</h2>
          <ul className="space-y-4 text-lg">
            <CheckListItem><strong>結婚式</strong>で、ウェディングドレスや和装から見えるタトゥーを隠したい。</CheckListItem>
            <CheckListItem><strong>温泉・プール・海水浴</strong>など、家族や友人とのレジャーを気兼ねなく楽しみたい。</CheckListItem>
            <CheckListItem><strong>就職活動・転職活動</strong>の面接や、会社の健康診断で不要な心配を避けたい。</CheckListItem>
            <CheckListItem><strong>お子様の学校行事</strong>（授業参観、プール、運動会）で、周囲の目を気にせず参加したい。</CheckListItem>
            <CheckListItem><strong>半袖を着る季節</strong>に、腕のタトゥーを気にせずおしゃれを楽しみたい。</CheckListItem>
          </ul>
        </section>

        {/* A (Action) */}
        <section className="py-12 bg-[#B50080] text-white rounded-lg">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6">その日一日、最高のあなたでいるために。</h2>
            <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto">
              「こんなタトゥーでも隠せる？」「どのくらいの時間もつの？」など、どんな疑問にも専門の技術者がお答えします。一人で悩まず、まずはお気軽にご相談ください。
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

export default TattooCover;
