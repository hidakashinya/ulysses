import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: 'general',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    console.log(formData);
    alert('お問い合わせありがとうございます。近日中にご連絡いたします。');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      service: 'general',
      message: ''
    });
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#B50080] py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">お問い合わせ</h1>
          <p className="text-xl mb-0 max-w-2xl mx-auto">
            施術予約、講習申込、製品に関するお問い合わせはこちらから。
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-serif mb-8 text-gray-800">お気軽にご連絡ください</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#B50080] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">所在地</h3>
                    <p className="text-gray-600">広島市南区皆実町5丁目20-9 アームズ皆実1007</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#B50080] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">お電話</h3>
                    <p className="text-gray-600">
                      <a href="tel:0908709993" className="hover:text-[#B50080] transition-colors">
                        090-8710-9993
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#B50080] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">メール</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@example.com" className="hover:text-[#B50080] transition-colors">
                        info@example.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#B50080] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">営業時間</h3>
                    <p className="text-gray-600">10:00～20:00（定休日なし）</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-3">LINE での問い合わせ</h3>
                <p className="text-gray-600 mb-4">
                  LINEでもお気軽にお問い合わせいただけます。友だち追加後、メッセージをお送りください。
                </p>
                <div className="text-center">
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center bg-[#06C755] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .63.285.63.63 0 .349-.284.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"></path>
                    </svg>
                    LINE で友だち追加
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-serif mb-6 text-gray-800">お問い合わせフォーム</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B50080] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B50080] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B50080] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        件名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B50080] focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B50080] focus:border-transparent"
                    >
                      <option value="general">一般的なお問い合わせ</option>
                      <option value="complex-cover">コンプレックスカバー（ニキビ跡・傷跡・アザ）</option>
                      <option value="tattoo-cover">タトゥーカバー</option>
                      <option value="body-jewelry">ボディジュエリー</option>
                      <option value="school">スクール・講習</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      メッセージ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B50080] focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-[#B50080] text-white px-8 py-3 rounded-full hover:bg-[#A10070] transition-colors duration-300"
                    >
                      送信する
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-serif mb-10 text-center text-gray-800">アクセス</h2>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            {/* This is a placeholder for the map. In a real application, you would use Google Maps or another map provider */}
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Google Maps would be embedded here</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 mb-4">
              詳細なアクセス方法については、ご予約・お問い合わせの際にご案内いたします。
            </p>
            <p className="text-gray-600">
              〒734-0001 広島市南区皆実町5丁目20-9 アームズ皆実1007
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;