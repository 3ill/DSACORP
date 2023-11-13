import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { copyright } from '../assets/icons';
import { TypingText } from '../components/CustomTexts';

const Footer = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" sm:h-[30px] lg:h-[80px] md:h-[50px]"
    >
      <div className="flex flex-col justify-center items-center">
        <TypingText
          title="Building The Future"
          textStyles="text-[16px] md:text-[30px] lg:text-[45px] text-white font-Azeret font-semibold tracking-[2.72px]"
        />
        <div className="flex flex-row gap-2 mt-5 items-center">
          <img src={copyright} className="lg:w-[40x] lg:h-[40px]" />
          <p className="text-[10px] md:text-[16px] lg:text-[18px] font-Azeret text-secondary">
            Copyright 2023. All rights reserved
          </p>
        </div>
        <p className="text-[10px]  lg:text-[18px] md:text-[16px] font-Azeret text-secondary mt-3">
          DSA CORP
        </p>
      </div>
    </motion.section>
  );
};

export default Footer;
