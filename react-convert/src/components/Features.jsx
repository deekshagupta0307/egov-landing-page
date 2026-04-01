import React from 'react';

const Features = () => {
  return (
    <section className="-mt-[100px] relative z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-[20px] p-8 md:p-[50px] shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
            
            {/* LEFT SIDE */}
            <div className="md:w-1/2 w-full">
              <h3 className="mb-6 leading-tight">
                <span className="text-xl md:text-[1.4rem] font-medium text-[#1F4E79] block">
                  Big problems need
                </span>
                <span className="text-2xl md:text-[2.8rem] font-bold text-[#1F4E79] block mt-1">
                  bold approaches
                </span>
              </h3>

              {/* BUTTONS */}
              <div className="flex flex-col gap-3">
                {['Public Health', 'Public Finance', 'Local Governance', 'Water & Supply'].map((btn, idx) => (
                  <button 
                    key={idx} 
                    className="bg-transparent border border-[#1F4E79] py-3 px-6 rounded-full text-[#1F4E79] w-full md:w-[340px] text-left hover:bg-[#3A7CA5] hover:text-white transition-colors duration-300 font-medium"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="md:w-1/2 w-full">
              <div className="flex flex-col md:flex-row gap-6">
                
                {/* CARD 1 */}
                <div className="relative p-6 rounded-[18px] text-white w-full h-[250px] md:h-[300px] overflow-hidden bg-[#56B6C2] flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-2xl md:text-3xl">210+</h4>
                    <p className="text-[#1F4E79] mt-2 mb-4 text-xs md:text-sm w-[70%] lg:w-[80%] font-medium">
                      Cities Live with 10 Bed ICU across India
                    </p>
                  </div>
                  <div>
                    <button className="bg-white text-[#1F4E79] border-none py-2 px-4 rounded-full text-xs font-semibold hover:bg-gray-100 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="relative p-6 rounded-[18px] text-white w-full h-[250px] md:h-[300px] overflow-hidden bg-[#2F80ED] flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-2xl md:text-3xl">2 Bn</h4>
                    <p className="text-white mt-2 mb-4 text-xs md:text-sm w-[70%] lg:w-[80%] font-medium opacity-90">
                      Covid-19 vaccination certificates issued
                    </p>
                  </div>
                  <div>
                    <button className="bg-white text-[#1F4E79] border-none py-2 px-4 rounded-full text-xs font-semibold hover:bg-gray-100 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
