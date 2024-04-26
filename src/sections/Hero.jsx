import { StarCanvas } from '../components';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="home"
      className=" relative sm:py-24 py-20 flex flex-col justify-center max-h-screen sm:max-h-screen  text-white max-sm:text-[40px] md:text-4xl lg:text-8xl font-extrabold font-orbitron tracking-[1.5px] bg-center bg-cover w-full items-center "
    >
      <StarCanvas />
      <div className="flex flex-col items-center -mt-[200px] max-sm:-mt-[250px]">
        <h1 className="max-sm:mt-[10px] mt-[15px] !tracking-wider ">
          DSA CORP
        </h1>
        <h3 className="py-5 font-grotesk mt-1 sm:mt-5 !font-bold !text-gray-200 text-[20px] sm:text-[30px] !tracking-[2.5px] !leading-[2.5rem] ">
          The Web3 Lifestyle
        </h3>
      </div>
    </motion.section>
  );
};

export default Hero;
