import { useEffect } from 'react';
import { Button } from '../components';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';

const Upcoming = () => {
  const history = useNavigate();
  const registerEvent = () => {
    history('/reserve');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="absolute top-[460px] md:top-[520px] lg:top-[650px]"
    >
      <div className="flex flex-col  ">
        <TitleText title="Web3: The Genesis" textStyles="header-text" />
        <h3 className="sub-text">
          Amidst the intricate tapestry of technical advancements within the
          web3 ecosystem, the pursuit of financial and technological excellence
          has often eclipsed the equally vital dimensions of personal
          development . <br />
          <br />
          While the prospects of monetary gain and technical innovation are
          compelling, we must not overlook the profound impact of web3 on our{' '}
          <span className="guide-text">mental well-being</span>, social
          adeptness, and physical vitality. <br />
          <br />
          Join us to explore the often-overlooked dimensions of web3 - the
          emotional intelligence, social finesse, and physical well-being that
          contribute to not only career success but{' '}
          <span className="guide-text">personal fulfillment</span>. <br />{' '}
          <br />
          The Genesis Workshop empowers you to navigate this intricate landscape
          with a holistic approach, enhancing both your craft and your
          individuality
        </h3>
        <div className="flex flex-row gap-2 mt-[9px]">
          <Button
            title="Reserve"
            onClick={registerEvent}
            background="bg-secondary"
            textColor="text-black"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Upcoming;
