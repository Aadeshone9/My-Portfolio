import React from 'react';

const LOGOS = ['Google'];

const LogoLoop = () => {
  const extendedLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[40%] w-full h-[248px] overflow-x-hidden">
      <div className="relative flex w-full h-full items-center">
        <div className="flex animate-looping-scroll">
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none font-subtitle font-semibold text-[200px] leading-[248px] tracking-[0.02em] text-[#757575] w-[657px] text-center mr-20"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoLoop;
