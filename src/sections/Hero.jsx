import { useGSAP } from '@gsap/react';
import { StarCanvas } from '../components';
import gsap from 'gsap';

const Hero = () => {
  useGSAP(() => {
    gsap.to('#big_text', {
      opacity: 1,
      delay: 2,
      scale: 1.3,
      ease: 'power1.out',
    });
    gsap.to('#small_text', {
      opacity: 1,
      delay: 2.5,
    });
  }, []);
  return (
    <section
      id="home"
      className=" relative sm:py-24 py-20 flex flex-col justify-center max-h-screen sm:max-h-screen  text-white max-sm:text-[40px] md:text-4xl lg:text-8xl font-extrabold font-orbitron tracking-[1.5px] bg-center bg-cover w-full items-center "
    >
      <StarCanvas />
      <div className="flex flex-col items-center -mt-[200px] max-sm:-mt-[250px]">
        <h1
          id="big_text"
          className="max-sm:mt-[10px] mt-[15px] !tracking-wider opacity-0 "
        >
          DSA CORP
        </h1>
        <h3
          id="small_text"
          className="py-5 header-text !font-satoshi tracking-widest  mt-5 max-sm:mt-1 !font-semibold !text-gray-200 capitalize max-sm:text-[20px] opacity-0 "
        >
          The Web3 Lifestyle
        </h3>
      </div>
    </section>
  );
};

export default Hero;
