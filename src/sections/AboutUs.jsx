import { Download } from '../components';
import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';
import { heroVideo } from '../assets';
const AboutUs = () => {
  return (
    <motion.section
      id="about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-sm:-mt-[50px] flex flex-col justify-center"
    >
      <div className="flex flex-col gap-5 ">
        <TitleText title="About Us" textStyles="header-text" />
        <p id="para" className="sub-text">
          <span className="guide-text">DSA CORP is a mastermind community</span>{' '}
          that aims to enable its members navigate the web3 ecosystem safely. We
          are a group of like-minded individuals who believe in the potential of
          web3 and{' '}
          <span className="guide-text">
            share tips on how to successfully participate
          </span>{' '}
          in the web3 ecosystem and derive value from it. <br /> <br />
          Our mission is to build the future by{' '}
          <span className="guide-text">
            educating our generation and future generations
          </span>{' '}
          on the fundamentals of web3 and the opportunities it presents. We
          provide free resources and a safe space for individuals to explore the
          web3 world.
          <br /> <br />
          Our goal is to break down barriers slowing the adoption of web3
          technology,{' '}
          <span className="guide-text">
            nurture the next generation of web3 innovators in Africa
          </span>
          , and build a more decentralized future.
        </p>

        <div className="md:w-11/12 w-12/12 rounded-md">
          <video controls autoPlay muted playsInline={true} key={heroVideo}>
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

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
