import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  service: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, service }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <svg className="w-8 h-8 text-[#B50080]\" fill="currentColor\" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex justify-between items-center">
        <p className="font-medium text-gray-800">{author}</p>
        <span className="bg-pink-100 text-[#B50080] text-sm px-3 py-1 rounded-full">{service}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;