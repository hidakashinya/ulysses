import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, TrendingUp, Target, Phone, Mail, DollarSign, Clock, Star } from 'lucide-react';

const School: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section - 問題提起 */}
      <section className="bg-gradient-to-br from-[#B50080] to-[#800060] py-20 px-4 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              【サロンオーナー様へ】<br />
              既存メニューに「＋α」で<br />
              <span className="text-yellow-300">売上・集客・お客様満足度を劇的に向上</span><br />
              させる秘密の技術とは？
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
              高まる肌悩み・タトゥーカバー需要、4K/8K対応メイク...<br />
              今、美容業界で導入が進む「エアブラシメイク」は、<br className="hidden md:block" />
              あなたのサロンに何をもたらすのか？
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">こんなお悩みありませんか？</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">⚠️</span>
                  <span>既存メニューの価格競争に疲弊している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">⚠️</span>
                  <span>技術に自信はあるのに、他店との差別化に悩んでいる</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">⚠️</span>
                  <span>お客様の深刻な肌悩みに、今以上の解決策を提供できない</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">⚠️</span>
                  <span>ブライダルや特別なイベント向けサービスを強化したい</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">このままだと...</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-300 mr-3 mt-1">❌</span>
                  <span>高単価が見込める新しいニーズを取り逃す</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 mr-3 mt-1">❌</span>
                  <span>サロンの成長機会を失ってしまう</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 mr-3 mt-1">❌</span>
                  <span>お客様との深い信頼関係を築くチャンスを逃す</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 mr-3 mt-1">❌</span>
                  <span>4K/8K時代の高精細映像に対応できない</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 解決策の提示 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-800">
            その答えがここにあります
          </h2>
          <div className="bg-gradient-to-r from-[#B50080] to-[#800060] text-white p-8 md:p-12 rounded-2xl mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ハリウッドで30年以上の実績を持つプロ仕様技術
            </h3>
            <p className="text-xl md:text-2xl mb-6">
              「DINAIRエアブラシメイク」+ ビジネス成功ノウハウ
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              単にエアブラシが使えるようになるだけでなく、あなたのサロンの現状を劇的に変える
              <strong className="text-yellow-300">具体的な成果</strong>を手に入れることができます。
            </p>
          </div>
        </div>
      </section>

      {/* 具体的な成果 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-gray-800">
            この講習で手に入る具体的な成果
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">売上・客単価の飛躍的向上</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>ブライダル、成人式、イベント、撮影、タトゥー/傷跡カバーといった<strong>高単価・高需要な専門メニュー</strong>を追加</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>既存メニューの<strong>付加価値を高めて価格アップ</strong>を実現</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>新しい顧客層</strong>（コンプレックスを持つ方、敏感肌の方など）を獲得</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">圧倒的な差別化とブランディング</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>国内ではまだ導入サロンが少ない<strong>希少な技術</strong>で競合と差別化</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>「ハリウッド生まれのプロ技術」として<strong>信頼性の高いサロン</strong>として認知</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>4K/8K高精細映像時代</strong>に対応した先進的技術</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">お客様満足度の最大化</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>従来のメイクでは難しかった<strong>広範囲のシミ、ニキビ跡、傷跡、タトゥー、アザ</strong>を自然でカバー</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>薄づきなのに崩れにくい、美しい肌</strong>を長時間キープ</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>敏感肌やアトピー肌</strong>のお客様にも安心して施術提供</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 受講生の成功事例 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-gray-800">
            「技術だけじゃない、売上につながる」卒業生が続々！
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 font-medium">成功事例 1</span>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                「講習で学んだ営業方法や資料を活用し、<strong className="text-[#B50080]">ブライダル会場との提携</strong>を獲得できました。結婚式の前撮りやお式当日のタトゥーカバーの依頼が増え、新たな収入源になっています。」
              </blockquote>
              <p className="text-gray-800 font-medium">30代 美容サロンオーナー様</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 font-medium">成功事例 2</span>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                「エアブラシ導入により、<strong className="text-[#B50080]">客単価を30%アップ</strong>できただけでなく、お客様からの信頼度が増し、リピートにも繋がっています。特に敏感肌のお客様から喜ばれ、口コミでの紹介も増えました。」
              </blockquote>
              <p className="text-gray-800 font-medium">40代 メイクアップアーティスト様</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600 font-medium">感動の声</span>
            </div>
            <blockquote className="text-gray-700 text-lg italic">
              「重い肌悩みを抱えていたお客様が、施術後に<strong className="text-[#B50080]">鏡を見て最高の笑顔</strong>になった瞬間を見た時、この技術を導入して本当に良かったと心から思いました。お客様から『人生が変わった』と言っていただけるサービスができるようになりました。」
            </blockquote>
            <p className="text-gray-800 font-medium mt-4">20代 エステサロンオーナー様</p>
          </div>
        </div>
      </section>

      {/* 講師紹介 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-gray-800">
            講師紹介
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3373737/pexels-photo-3373737.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="須美ひろ江 講師" 
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">須美 ひろ江</h3>
                <p className="text-[#B50080] font-medium">DINAIRアメリカ本社認定マスターティーチャー</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  私自身、長年の肌悩み（抜毛症）や大切な家族の経験から、エアブラシメイクがもたらす<strong className="text-[#B50080]">「コンプレックスを笑顔に変える力」</strong>を深く実感しました。
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  技術を通じてお客様に<strong className="text-[#B50080]">「ハッピー」を届ける魔法</strong>をかけることに、大きなやりがいと情熱を感じています。
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong className="text-[#B50080]">DINAIRアメリカ本社認定のマスターティーチャー</strong>として、ハリウッド生まれの確かな技術に基づいたプロフェッショナル講習を提供しています。
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3 text-[#B50080]">私の指導方針</h4>
                  <p className="text-gray-700">
                    単にエアブラシの技術を教えるだけでなく、サロンオーナー様がこの技術を<strong>ビジネスとして成功させ、売上向上につなげるための具体的な「売り方」</strong>をお伝えすることに特化しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 講習内容詳細 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-gray-800">
            DINAIRエアブラシメイク プロフェッショナル講習<br />
            <span className="text-[#B50080]">+ ビジネス成功サポート</span>
          </h2>
          
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            本講習は、単なる技術習得にとどまりません。<br />
            プロとして活躍し、ビジネスを成功させるための全てを提供します。
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* メイン講習 */}
            <div className="bg-gradient-to-br from-[#B50080] to-[#800060] text-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">DINAIR プロフェッショナルアーティスト講習</h3>
                <div className="text-4xl font-bold text-yellow-300">¥154,000</div>
                <p className="text-white/90">（税込）</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 mt-0.5 flex-shrink-0" />
                  <span>エアブラシの基本操作から応用技術まで完全習得</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 mt-0.5 flex-shrink-0" />
                  <span>ファンデーション、チーク、アイブロウ技術</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 mt-0.5 flex-shrink-0" />
                  <span>タトゥー/傷跡カバー専門技術</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 mt-0.5 flex-shrink-0" />
                  <span>DINAIRアメリカ本社発行の国際ディプロマ取得</span>
                </li>
              </ul>
              
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="text-center">
                  <Clock className="h-5 w-5 inline mr-2" />
                  <strong>2日間 / 12時間</strong>の集中講習
                </p>
              </div>
            </div>

            {/* ビジネスサポート */}
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full inline-block mb-2">
                  最も重要！
                </div>
                <h3 className="text-2xl font-bold mb-2">ビジネス実践フォローアップ講習</h3>
                <div className="text-4xl font-bold text-yellow-300">¥150,000〜</div>
                <p className="text-white/90">（税込・1年間パッケージ）</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 mt-0.5 flex-shrink-0" />
                  <span>「どうやって仕事にするか」に特化した実践ノウハウ</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 mt-0.5 flex-shrink-0" />
                  <span>仕事の獲得方法や具体的な営業の仕方を伝授</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 mt-0.5 flex-shrink-0" />
                  <span>成功事例集、カルテ、営業資料などの現場ツール提供</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 mt-0.5 flex-shrink-0" />
                  <span>個別相談による継続的なサポート</span>
                </li>
              </ul>
              
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="text-center">
                  <strong>3ヶ月〜1年間</strong>のパッケージ選択可能
                </p>
              </div>
            </div>
          </div>

          {/* オプション講習 */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">実践的オプション講習</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold mb-3">メイクアップブラッシュアップ</h4>
                <p className="text-gray-600 text-sm">さらなる技術向上を目指す方向け</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold mb-3">ブライダルボディカバー</h4>
                <p className="text-gray-600 text-sm">結婚式特化の専門技術</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold mb-3">プロカメラマンによる本格撮影講習</h4>
                <p className="text-gray-600 text-sm">ポートフォリオ制作支援</p>
              </div>
            </div>
          </div>

          {/* 投資対効果 */}
          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">投資対効果</h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong className="text-3xl text-[#B50080]">合計約30万円</strong>の投資で、
              </p>
              <p className="text-xl text-gray-800">
                <strong>一生もののプロ技術</strong> + <strong>売上を劇的に変えるビジネス実践ノウハウ</strong> + <strong>継続的なサポート体制</strong><br />
                全てが手に入ります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ターゲット */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-gray-800">
            こんなサロンオーナー様・美容関係者様に強くお勧めします
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <Target className="h-8 w-8 text-[#B50080] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">新しい収益の柱を作りたい方</h3>
                  <p className="text-gray-600">既存のサービスに行き詰まりを感じ、売上向上の突破口を求めている</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <Target className="h-8 w-8 text-[#B50080] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">お客様の深い悩みに寄り添いたい方</h3>
                  <p className="text-gray-600">満足度を最重視し、従来の技術では解決できない課題に挑戦したい</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <Target className="h-8 w-8 text-[#B50080] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">活躍の場を広げたいプロの方</h3>
                  <p className="text-gray-600">ブライダル、イベント、撮影など、新しい分野に挑戦したいヘアメイクアップアーティスト様、着付師様</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <Target className="h-8 w-8 text-[#B50080] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">ビジネスノウハウも求めている方</h3>
                  <p className="text-gray-600">技術だけでなく、学んだことを確実に仕事につなげる方法を知りたい</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <Target className="h-8 w-8 text-[#B50080] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">最先端技術を習得したい方</h3>
                  <p className="text-gray-600">将来の美容業界を見据え、希少性の高い技術で差別化を図りたい</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <Target className="h-8 w-8 text-[#B50080] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">本気でサロンを成長させたい方</h3>
                  <p className="text-gray-600">一時的な施策ではなく、長期的な成長戦略として技術投資を考えている</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-gray-800">
            よくあるご質問
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-[#B50080]">Q. エアブラシメイクは全くの未経験でも大丈夫ですか？</h3>
              <p className="text-gray-700">A. はい、全く問題ありません。基本的な操作から丁寧に指導いたします。メイクの基礎知識があれば、2日間の講習で十分にプロレベルの技術を習得できます。</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-[#B50080]">Q. 必要な機材は高額ですか？初期投資はどれくらい必要ですか？</h3>
              <p className="text-gray-700">A. DINAIRの基本セットは約15万円程度から始められます。分割購入も可能で、施術1〜2回分の収益で機材代を回収できる価格設定です。</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-[#B50080]">Q. 受講後、すぐに仕事として始められますか？</h3>
              <p className="text-gray-700">A. はい。技術講習に加えて、ビジネス実践講習で営業方法や集客ノウハウをお教えするので、受講後すぐに新サービスとして導入可能です。</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-[#B50080]">Q. ディプロマは本当に海外で通用しますか？</h3>
              <p className="text-gray-700">A. DINAIRアメリカ本社発行のディプロマは国際的に認められており、海外でのお仕事でも十分に通用する資格です。</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-[#B50080]">Q. スタッフに教えることはできますか？</h3>
              <p className="text-gray-700">A. 基本的な技術はお教えできますが、プロとしての施術やビジネス展開には、正式な講習受講をお勧めしています。スタッフ研修プランもご相談ください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#B50080] to-[#800060] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            サロンの未来を切り拓く、最初の一歩を踏み出しませんか？
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            この技術とノウハウが、あなたのサロンを次のステージへと導きます。<br />
            今すぐ以下のいずれかをお選びください。
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link 
              to="/contact" 
              className="bg-white text-[#B50080] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 block"
            >
              📄 詳しい資料をダウンロード
            </Link>
            <Link 
              to="/contact" 
              className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 block"
            >
              💬 無料個別相談に申し込む
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 block"
            >
              📅 次回説明会の日程確認
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:0908709993" 
              className="inline-flex items-center bg-white/20 text-white hover:bg-white/30 px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              お電話でのお問い合わせ
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white/20 text-white hover:bg-white/30 px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </section>

      {/* 追伸 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">追伸</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            多くのお客様に「ありがとう」と言われ、サロンの売上も向上するDINAIRエアブラシメイク講習。<br />
            技術だけでなく、仕事の取り方・進め方までサポートする手厚い内容です。<br />
            あなたのサロンが、お客様にとって「なくてはならない存在」になる日も近いかもしれません。
          </p>
        </div>
      </section>
    </div>
  );
};

export default School;