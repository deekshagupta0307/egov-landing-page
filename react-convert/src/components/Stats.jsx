import React from 'react';

const Stats = () => {
  return (
    <section className="relative bg-[url('/public/people.jpg')] bg-center bg-cover bg-no-repeat min-h-[500px] text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl pt-[100px] pb-[220px]">
        {/* TOP CONTENT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 max-w-5xl mx-auto">
          {/* LEFT NUMBER */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-[4.5rem] font-bold tracking-tight">
              1,000,000,100+
            </h1>
          </div>

          {/* RIGHT TEXT */}
          <div className="md:w-1/2 md:text-right">
            <p className="text-lg md:text-[1.2rem] max-w-[420px] md:ml-auto text-left leading-relaxed">
              Citizens availing public services through eGov's Digital Public Goods (DPG).
            </p>
          </div>
        </div>

        {/* BOTTOM STATS */}
        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] flex flex-col md:flex-row text-center gap-6 md:gap-0">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">1.1 Billion+</h3>
            <p className="text-base font-normal">Public services delivered</p>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">50+ partners</h3>
            <p className="text-base font-normal">Collaborations across countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
