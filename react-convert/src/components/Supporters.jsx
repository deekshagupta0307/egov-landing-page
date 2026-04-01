import React from 'react';

const Supporters = () => {
  return (
    <section className="py-[70px] bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
      
        <h3 className="text-2xl md:text-3xl text-left mb-8">
          <span className="font-light text-[#1F2A5A] mr-2">Our</span>
          <span className="font-bold text-[#1F2A5A]">Supporters</span>
        </h3>
        
        <div className="mt-4 text-center">
          <img 
            src="/public/img6.png" 
            alt="Our Supporters" 
            className="max-w-full w-full lg:max-w-[900px] h-auto inline-block"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Supporters;
