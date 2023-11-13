import { StarCanvas } from '../components';

const Hero = () => {
  return (
    <section
      id="home"
      className=" relative sm:py-24 py-20 flex flex-col justify-center max-h-screen sm:max-h-screen  text-white max-sm:text-[40px] md:text-4xl lg:text-8xl font-extrabold font-orbitron tracking-[1.5px] bg-center bg-cover w-full items-center "
    >
      <StarCanvas />
      <div className="flex flex-col items-center -mt-[200px] max-sm:-mt-[250px]">
        <h1 className="max-sm:mt-[10px] mt-[15px]">DSA CORP</h1>
        <h3 className="py-5 header-text !font-Azeret  mt-5 max-sm:mt-1 !font-semibold !text-gray-400 capitalize max-sm:text-[20px] ">
          The Web3 Lifestyle
        </h3>
      </div>
    </section>
  );
};

export default Hero;
