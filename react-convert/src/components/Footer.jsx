import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#d7e3ec] py-[60px] text-[#1F2A5A]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            
            <div className="w-full md:w-1/3">
              <img src="/public/logo.png" className="w-[120px] mb-5" alt="eGov Logo" />

              <p className="text-sm leading-relaxed max-w-[280px]">
                Catalysing digital transformation in public service delivery at speed & scale.
              </p>

              <div className="flex gap-[15px] mt-5">
                {['f', 'x', 'in', '▶'].map((icon, idx) => (
                  <div 
                    key={idx} 
                    className="w-[38px] h-[38px] border border-[#1F2A5A] rounded-full flex items-center justify-center text-sm cursor-pointer transition-colors duration-300 hover:bg-[#1F2A5A] hover:text-white"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <h5 className="font-bold mb-5 text-lg">Useful Links</h5>

              <div className="flex gap-10">
                <ul className="list-none p-0 flex flex-col gap-2.5">
                  <li className="text-sm cursor-pointer hover:underline">Home</li>
                  <li className="text-sm cursor-pointer hover:underline">Our Impact</li>
                  <li className="text-sm cursor-pointer hover:underline">DIGIT Sandbox</li>
                </ul>

                <ul className="list-none p-0 flex flex-col gap-2.5">
                  <li className="text-sm cursor-pointer hover:underline">Our People</li>
                  <li className="text-sm cursor-pointer hover:underline">Financials</li>
                  <li className="text-sm cursor-pointer hover:underline">Contact Us</li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <h5 className="font-bold mb-4 text-lg">Subscribe Now</h5>

              <p className="text-sm mb-5 leading-relaxed max-w-[320px]">
                Receive regular updates of our monthly newsletter DOT – in your inbox.
              </p>

              <div className="flex bg-[#f2f2f2] rounded-full overflow-hidden w-full max-w-[320px]">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="border-none py-3 px-[18px] flex-1 outline-none bg-transparent placeholder-gray-500 text-[#1F2A5A]"
                />
                <button className="bg-[#f58220] border-none px-5 text-white text-lg cursor-pointer hover:bg-[#d6721d] transition-colors">
                  ✉
                </button>
              </div>
            </div>

          </div>
        </div>
      </footer>

      <div className="bg-[#2F80ED] text-white py-[15px] text-sm">
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center flex-wrap gap-4">

          <p className="m-0">
            ©2024. eGov. All Rights Reserved.
          </p>

          <div className="flex gap-[30px]">
            <span className="cursor-pointer hover:underline transition-all">Privacy Policy</span>
            <span className="cursor-pointer hover:underline transition-all">Terms and Conditions</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
