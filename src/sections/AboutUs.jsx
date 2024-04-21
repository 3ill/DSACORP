import { Download } from '../components';
import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { heroVideo } from '../assets';
const AboutUs = () => {
  const scrollRef = useRef();
  const videoRef = useRef(null);

  const handlePlay = () => videoRef.current.play();
  const handlePause = () => videoRef.current.pause();
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
        delay: 0.8,
        stagger: 0.1,
        ease: 'power1.inOut',
      }
    );

    gsap.to('#learn', {
      opacity: 1,
      ease: 'power1.inOut',
      delay: 0.8,
    });
  }, []);
  return (
    <motion.section
      id="about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-sm:-mt-[50px] flex flex-col justify-center"
    >
      <div id="trigger" className="flex flex-col gap-5 " ref={scrollRef}>
        <TitleText title="About Us" textStyles="header-text" />
        <p id="para" className="sub-text">
          <span className="guide-text">Dsacorp is a mastermind community</span>{' '}
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
          <video
            ref={videoRef}
            className="rounded-md"
            controls
            autoPlay
            muted
            onPlay={handlePlay}
            onPause={handlePause}
            playsInline={true}
            key={heroVideo}
          >
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
