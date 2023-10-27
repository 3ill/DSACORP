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
      <div className="flex flex-col ">
        <TitleText title="About Us" textStyles="header-text" />
        <p className="sub-text">
          Web3 communities <span className="guide-text">drive innovation</span>{' '}
          by enabling people to{' '}
          <span className="guide-text">engage, contribute, and govern</span> the
          systems they believe in.
          <br />
          Communities create an ideal environment for various{' '}
          <span className="guide-text">skills and ideas to unite</span>, leading
          to a vibrant ecosystem that flourishes through collaboration—a{' '}
          <span className="guide-text">proven formula for success.</span>
          <br /> <br />
          Here at <span className="guide-text">DSA CORP</span>, we are firm
          believers that communities are at the core of the Web3 transformation.
          They act as agents of change, igniting the flame of creativity and
          cooperation, propelling us toward a decentralized future.
        </p>

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
