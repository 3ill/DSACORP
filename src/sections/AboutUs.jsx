import { Download } from '../components';
import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';

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
          <span className="guide-text">
            DSA CORP fosters a collaborative mastermind community
          </span>{' '}
          empowering members to navigate the web3 ecosystem safely together. We
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

        {/**Embed youtube video */}
        <div className="video-container padding-x md:flex sm:flex mt-5">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/yZIi9-RTXUw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div id="learn" className="flex mt-3">
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
