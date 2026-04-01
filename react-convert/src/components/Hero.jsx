import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
          
          {/* LEFT CONTENT */}
          <div className="md:w-1/2">
            <h4 className="text-xl md:text-[2rem] lg:text-[2.3rem] text-[#1F2A5A] font-normal leading-snug w-full lg:max-w-[90%] mb-4">
              20 years of digital transformation in public service delivery
            </h4>

            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#1F2A5A] relative inline-block z-10 mb-6 before:content-[''] before:absolute before:left-0 before:bottom-[10px] before:w-full before:h-[45%] before:bg-[#A7D6D9] before:-z-10 before:rounded-lg">
              It's possible
            </h1>

            <p className="mt-3 text-base text-gray-700 leading-relaxed mb-8">
              Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we’re driven by the power of open digital infrastructure and ecosystems to enable governments deliver accessible, inclusive and transparent services to every citizen.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#4FB6B8] text-white rounded-full py-3 px-7 border-2 border-[#4FB6B8] hover:bg-[#3aa2a4] hover:border-[#3aa2a4] transition-colors font-medium">
                Our Approach
              </button>
              <button className="bg-transparent border-2 border-[#1F2A5A] text-[#1F2A5A] rounded-full py-3 px-7 hover:bg-[#4FB6B8] hover:text-white hover:border-[#4FB6B8] transition-colors font-medium">
                Our Impact
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img 
              src="/public/hero.jpg" 
              alt="Hero Event" 
              className="max-w-full h-auto rounded-[20px] shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
