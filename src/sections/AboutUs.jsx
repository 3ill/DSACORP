import { Download } from '../components';
import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';

const AboutUs = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex flex-col absolute top-[200px] lg:top-[350px] md:top-[270px]">
        <TitleText title="About Us" textStyles="header-text" />
        <h3 className="sub-text">
          At DSA CORP, we believe that communities are the heartbeat of the Web3
          revolution. They serve as the catalysts for change, igniting the spark
          of innovation and collaboration that propels us towards a
          decentralized future.
        </h3>

        <div className="flex mt-3">
          <Download
            title="Learn More"
            background="bg-secondary"
            textColor="text-black"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
