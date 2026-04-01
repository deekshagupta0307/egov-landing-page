import React from 'react';

const LatestSection = () => {
  const filterButtons = [
    "What's New",
    "Article",
    "White Papers",
    "Case studies",
    "Strategy Papers",
    "News & Media",
    "Videos",
    "Newsletter"
  ];

  const cards = [
    {
      img: '/public/img3.jpg',
      title: 'How India scaled public health',
      date: '20 Jan 2026'
    },
    {
      img: '/public/img4.jpg',
      title: 'Case study: Digital transformation',
      date: '21 Jan 2026'
    },
    {
      img: '/public/img5.jpg',
      title: 'Building for governance',
      date: '22 Jan 2026'
    }
  ];

  return (
    <section className="py-[70px] bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Heading */}
        <h3 className="text-2xl md:text-3xl mb-6 text-left">
          <span className="font-light text-[#1F2A5A] mr-2">Latest at</span>
          <span className="font-bold text-[#1F2A5A]">eGov</span>
        </h3>
        
        {/* 8 Rounded Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 justify-start">
          {filterButtons.map((btn, idx) => (
            <button 
              key={idx}
              className="rounded-full py-2.5 px-6 border border-[#1F2A5A] bg-transparent text-[#1F2A5A] font-medium cursor-pointer transition-colors duration-300 hover:bg-[#4FB6B8] hover:text-white hover:border-[#4FB6B8] text-sm"
            >
              {btn}
            </button>
          ))}
        </div>
        
        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="rounded-[15px] overflow-hidden cursor-pointer flex flex-col h-full bg-white shadow-sm hover:-translate-y-2 transition-transform duration-300"
            >
              <img src={card.img} alt={`Card ${idx + 1}`} className="w-full h-[200px] block object-cover" />
              <div className="bg-[#e6f4ff] text-[#1F2A5A] p-5 flex flex-col flex-grow text-left justify-between">
                <h5 className="font-bold text-base md:text-lg mb-2">
                  {card.title}
                </h5>
                <p className="font-medium text-sm text-gray-700 flex items-center gap-1.5 mt-auto">
                  eGov Foundation <span className="inline-block w-1.5 h-1.5 bg-current rounded-full"></span> {card.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Button */}
        <div className="mt-10 text-left">
          <button className="bg-[#4FB6B8] text-white rounded-full border-none py-3 px-8 font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
            See All
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default LatestSection;
