import React from 'react';

const SustainSection = () => {
  return (
    <section className="py-[100px] bg-white text-center">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* HEADING */}
        <h2 className="mb-6 leading-tight">
          <span className="text-xl md:text-[1.6rem] font-light text-[#1F2A5A] block">
            20 years of reimagining for citizens and
          </span>
          <span className="text-2xl md:text-[3rem] font-bold text-[#1F2A5A] relative inline-block z-10 before:content-[''] before:absolute before:left-0 before:bottom-[8px] before:w-full before:h-[45%] before:bg-[#A7D6D9] before:-z-10 before:rounded-md mt-2">
            sustaining change
          </span>
        </h2>

        {/* PARAGRAPH */}
        <p className="max-w-[700px] mx-auto my-5 text-base text-[#1F2A5A] leading-relaxed">
          Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing the quality of life for every citizen. To have sustainable impact at scale, the collective energy of local networks to solve local problems needs to be tapped into. Our partners & networks bring this collective energy to life. The ecosystem already exists; our task is to facilitate and amplify their efforts. For 20 years, we've been turning small steps into lasting, meaningful change, so that no citizen is left behind.
        </p>

        {/* IMAGES */}
        <div className="flex flex-col md:flex-row justify-center mt-10 gap-6">
          <div className="md:w-5/12">
            <img 
              src="/public/img1.jpg" 
              alt="Community image 1" 
              className="w-full h-auto rounded-[15px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] object-cover"
            />
          </div>
          <div className="md:w-5/12">
            <img 
              src="/public/img2.jpg" 
              alt="Community image 2" 
              className="w-full h-auto rounded-[15px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] object-cover"
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-10">
          <button className="bg-transparent border border-[#1F4E79] text-[#1F4E79] py-3 px-8 rounded-full transition-colors duration-300 hover:bg-[#3A7CA5] hover:text-white hover:border-[#3A7CA5] font-medium">
            About Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default SustainSection;
