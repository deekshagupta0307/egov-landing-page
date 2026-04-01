import React from 'react';

const CTA = () => {
  return (
    <section className="bg-[#1F2A5A] py-[65px] relative text-white">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[30px] flex-wrap">
        
        {/* LEFT SIDE */}
        <div className="w-full md:max-w-[50%] text-left">
          <img src="/public/digi.png" alt="Digi Logo" className="w-[160px] mb-5" />
          <h4 className="text-xl md:text-[1.4rem] font-light mb-2">Our Open source</h4>
          <h2 className="text-2xl md:text-[2.5rem] font-bold mb-5 leading-tight">
            technology-for-good platform
          </h2>
          <p className="text-base mb-6 text-gray-200 leading-relaxed md:max-w-md">
            DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is eGov's open-source platform with reusable building blocks and shared data registries that can be used to build solutions in multiple sectors.
          </p>
          <button className="py-3 px-6 rounded-full border-none bg-white text-[#1F2A5A] font-semibold transition-transform duration-300 hover:scale-105 mt-3">
            Explore the platform
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:max-w-[45%] text-left md:text-right mt-8 md:mt-0 flex justify-center md:justify-end">
          <img 
            src="/public/girl.jpg" 
            alt="Girl Illustration" className="max-w-full w-[450px] h-auto rounded-[15px] object-cover shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default CTA;
