import { copyright } from '../assets/icons';

const Footer = () => {
  return (
    <section className="mt-[100px] md:mt-[90px] sm:h-[30px] lg:h-[80px] md:h-[50px] ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[16px] md:text-[30px] lg:text-[45px] text-white font-Azeret font-semibold tracking-[2.72px]">
          Building The Future
        </h1>
        <div className="flex flex-row gap-2 mt-5 items-center">
          <img src={copyright} className="lg:w-[40x] lg:h-[40px]" />
          <p className="text-[10px] md:text-[16px] lg:text-[18px] font-Azeret text-secondary">
            Copyright. All rights reserved
          </p>
        </div>
        <p className="text-[10px]  lg:text-[18px] md:text-[16px] font-Azeret text-secondary mt-3">
          Subscribe
        </p>
      </div>
    </section>
  );
};

export default Footer;
