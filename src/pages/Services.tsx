import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#B50080] py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">サービス</h1>
          <p className="text-xl mb-0 max-w-2xl mx-auto">
            ユリシスディーバのエアブラシメイクで、肌の悩みを解消し、内側から輝く自分を。
          </p>
        </div>
      </section>
      
      {/* Complex Cover Section */}
      <section id="complex-cover" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif mb-6 text-gray-800">コンプレックスカバー</h2>
              <p className="text-lg text-gray-600 mb-6">
                肌のお悩み、諦めていませんか？結婚式や成人式、特別なイベント、旅行、写真撮影など、肌を出す機会があるけれど…
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#B50080] mr-2">•</span>
                  <span>「このタトゥーだけ、その日だけでも隠したい…」</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B50080] mr-2">•</span>
                  <span>「背中のニキビ跡や傷跡が気になって、着たいドレスを選べない…」</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B50080] mr-2">•</span>
                  <span>「生まれつきのアザや濃いシミを見られるのが恥ずかしい…」</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B50080] mr-2">•</span>
                  <span>「白斑や肌の変色を自然にカバーしたい」</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 mb-6">
                ユリシスディーバでは、これらの肌のお悩みを自然にカバーし、あなたが心から特別な日を楽しめるようサポートします。
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/7760583/pexels-photo-7760583.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="コンプレックスカバー" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-serif mb-6 text-gray-800">施術の流れ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center bg-[#B50080] text-white rounded-full w-10 h-10 mb-4">1</div>
                <h4 className="text-lg font-medium mb-2">初回カウンセリング</h4>
                <p className="text-gray-600">カバーしたい部位、範囲、イベントの種類、ご希望の仕上がりなどを詳細にお伺いします。</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center bg-[#B50080] text-white rounded-full w-10 h-10 mb-4">2</div>
                <h4 className="text-lg font-medium mb-2">事前リハーサル</h4>
                <p className="text-gray-600">ご希望に応じて、実際の施術に使用するファンデーションの色合わせを行い、仕上がりのイメージをご確認いただけます。</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center bg-[#B50080] text-white rounded-full w-10 h-10 mb-4">3</div>
                <h4 className="text-lg font-medium mb-2">ご成約・お振込み</h4>
                <p className="text-gray-600">施術内容、料金、日時、場所などを確認・確定します。</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center bg-[#B50080] text-white rounded-full w-10 h-10 mb-4">4</div>
                <h4 className="text-lg font-medium mb-2">施術当日</h4>
                <p className="text-gray-600">経験豊富な技術者がお悩みの箇所を丁寧にカバーしていきます。状態に合わせてお肌の色を調合・調整し、薄く重ねて仕上げます。</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-serif mb-6 text-gray-800">料金の目安</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">ニキビ跡・傷跡カバー</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>ハガキサイズ</span>
                      <span className="font-medium">¥5,500（税込）</span>
                    </li>
                    <li className="flex justify-between">
                      <span>B5サイズ</span>
                      <span className="font-medium">¥11,000（税込）</span>
                    </li>
                    <li className="flex justify-between">
                      <span>A4サイズ</span>
                      <span className="font-medium">¥16,500（税込）</span>
                    </li>
                    <li className="flex justify-between">
                      <span>デコルテ（胸元から上）</span>
                      <span className="font-medium">¥22,000（税込）〜</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>背中（全体）</span>
                      <span className="font-medium">¥33,000（税込）〜</span>
                    </li>
                    <li className="flex justify-between">
                      <span>腕（上腕・ひじ下）</span>
                      <span className="font-medium">¥16,500（税込）〜</span>
                    </li>
                    <li className="flex justify-between">
                      <span>腕（全体）</span>
                      <span className="font-medium">¥33,000（税込）〜</span>
                    </li>
                    <li className="flex justify-between">
                      <span>8時間専属</span>
                      <span className="font-medium">¥110,000（税込）〜</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mt-8 mb-4">タトゥーカバー</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>ハガキサイズ</span>
                      <span className="font-medium">¥11,000（税込）</span>
                    </li>
                    <li className="flex justify-between">
                      <span>B5サイズ</span>
                      <span className="font-medium">¥22,000（税込）</span>
                    </li>
                    <li className="flex justify-between">
                      <span>背中（肩甲骨から上片側）</span>
                      <span className="font-medium">¥33,000（税込）〜</span>
                    </li>
                    <li className="flex justify-between">
                      <span>背中（全体）</span>
                      <span className="font-medium">¥55,000（税込）〜</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>腕（上腕・ひじ下）</span>
                      <span className="font-medium">¥22,000（税込）〜</span>
                    </li>
                    <li className="flex justify-between">
                      <span>腕（全体）</span>
                      <span className="font-medium">¥33,000（税込）〜</span>
                    </li>
                    <li className="flex justify-between">
                      <span>デコルテ（胸元から上）</span>
                      <span className="font-medium">¥22,000（税込）〜</span>
                    </li>
                    <li className="flex justify-between">
                      <span>8時間専属</span>
                      <span className="font-medium">¥110,000（税込）〜</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-6">
                ※上記料金はあくまで目安です。タトゥーのトライバル柄や多色使い、サイズ、お肌の色などにより料金は変動する場合があります。<br />
                ※タトゥーや傷跡の凹凸は完全に隠しきれない場合があります（色合いはカバーできます）。<br />
                ※タトゥーの色が非常に濃い場合、完全に隠しきれない場合もあります（通常想定される濃さであれば問題ありません）。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Body Jewelry Section */}
      <section id="body-jewelry" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif mb-6 text-gray-800">ボディジュエリー</h2>
              <p className="text-lg text-gray-600 mb-6">
                特別な日を、肌に描くあなただけの輝き。大切なイベント、記憶に残る瞬間に。肌に直接アートを描く特別な輝きを。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                経験豊富なプロの技術で、肌の悩みを気にせず、内面から輝く最高のあなたを引き出します。
              </p>
              <h3 className="text-xl font-medium mb-4">ボディジュエリーの特徴</h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#B50080] mr-2">•</span>
                  <span>肌の悩みを気にせず、自信を持って大切な日を迎えられる</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B50080] mr-2">•</span>
                  <span>イベントや衣装に合わせた、世界に一つだけのオリジナルデザイン</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B50080] mr-2">•</span>
                  <span>宝石のようなキラキラとした輝きで、より華やかな印象に</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B50080] mr-2">•</span>
                  <span>肌に優しいFDA認証のグルーを使用するので安心</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="ボディジュエリー" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-serif mb-6 text-gray-800">サービスの流れ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-center bg-[#B50080] text-white rounded-full w-10 h-10 mb-4">1</div>
                <h4 className="text-lg font-medium mb-2">デザイン相談</h4>
                <p className="text-gray-600">オリジナルデザイン制作、または既存デザインの中からお選びいただけます。</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-center bg-[#B50080] text-white rounded-full w-10 h-10 mb-4">2</div>
                <h4 className="text-lg font-medium mb-2">パッチテスト</h4>
                <p className="text-gray-600">お肌が弱い方でも安心していただくために、事前にパッチテストを行います。</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-center bg-[#B50080] text-white rounded-full w-10 h-10 mb-4">3</div>
                <h4 className="text-lg font-medium mb-2">デザイン打ち合わせ</h4>
                <p className="text-gray-600">作成したデザインを元に、細かな調整を行います。</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-center bg-[#B50080] text-white rounded-full w-10 h-10 mb-4">4</div>
                <h4 className="text-lg font-medium mb-2">施術</h4>
                <p className="text-gray-600">通常、イベント前日などに当サロンにてマンツーマンで施術を行います。</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-center bg-[#B50080] text-white rounded-full w-10 h-10 mb-4">5</div>
                <h4 className="text-lg font-medium mb-2">当日装飾</h4>
                <p className="text-gray-600">スワロフスキーなど立体的な装飾がある場合は、イベント当日に式場などへお伺いして取り付けを行います。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 bg-[#B50080] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif mb-6">まずはお気軽にご相談ください</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            「私のこの悩み、エアブラシで対応できる？」「どのくらいの範囲で、どのくらい自然に隠せるの？」「特別な日までに間に合う？」どんな些細な疑問や不安にも、経験豊富なスタッフが丁寧にお応えします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:0908709993" 
              className="inline-flex items-center bg-white text-[#B50080] hover:bg-pink-100 px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              お電話でのお問い合わせ
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;