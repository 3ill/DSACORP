import { Download } from '../components';
import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

const AboutUs = () => {
  const scrollRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      '#para',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2,
        stagger: 0.1,
        ease: 'power1.inOut',
      }
    );

    gsap.to('#learn', {
      opacity: 1,
      ease: 'power1.inOut',
      delay: 2.5,
    });
  }, []);
  return (
    <motion.section
      id="about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-sm:-mt-[50px]"
    >
      <div id="trigger" className="flex flex-col " ref={scrollRef}>
        <TitleText title="About Us" textStyles="header-text" />
        <p id="para" className="sub-text">
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

        <div id="learn" className="flex mt-3 opacity-0">
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
