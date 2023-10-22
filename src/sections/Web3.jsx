import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';

const Web3 = () => {
  return (
    <motion.section
      className=" max-sm:mt-[130px] md:mt-[-70px] lg:mt-[20px]"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TitleText title="What is Web3?" textStyles="header-text" />
      <p className="sub-text">
        {`Web3, short for "Web 3.0," is the next evolutionary stage of the internet that integrates blockchain technology.`}{' '}
        <br /> <br /> It is a decentralized and user-centric internet where
        individuals have greater <span className="guide-text">control</span>{' '}
        over their data and interactions. <br /> <br />
        In Web3, blockchain serves as the foundation,{' '}
        <span className="guide-text">
          enabling trust, security, and transparency
        </span>{' '}
        for online transactions and interactions. <br /> <br /> This shift
        empowers users to own their digital assets, participate in decentralized
        applications (DApps), and engage in peer-to-peer interactions, reducing
        reliance on centralized intermediaries.
      </p>
    </motion.section>
  );
};

export default Web3;
