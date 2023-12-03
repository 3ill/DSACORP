import { Telegram, discord, instagram } from '../assets/icons';
import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';
import {
  handleInstagramClick,
  handleTelegramClick,
  handleDiscordClick,
} from '../../actions';
import EarthCanvas from '../components/canvas/Earth';

const Connect = () => {
  return (
    <motion.section
      id="connect"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className=" flex flex-col  ">
        <TitleText
          title="Connect With The Community"
          textStyles="header-text capitalize"
        />
        <h3 className="sub-text">
          Join a community of like minded individuals to get{' '}
          <span className="guide-text">exclusive perks</span>, updates and
          resources to traverse your web3 journey
        </h3>

        <div className="flex flex-row gap-2  mt-[7px]">
          <img
            src={instagram}
            alt="instagram"
            className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] hover:animate-pulse hover:scale-110 active:scale-105 transition"
            onClick={handleInstagramClick}
          />

          <img
            src={Telegram}
            alt="telegram"
            className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] hover:animate-pulse hover:scale-110 active:scale-105 transition"
            onClick={handleTelegramClick}
          />
          <img
            src={discord}
            alt="discord"
            className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] hover:animate-pulse hover:scale-110 active:scale-105 transition"
            onClick={handleDiscordClick}
          />
        </div>
        <div className="w-[300px] h-[300px] mt-[30px] ">
          <EarthCanvas scaleValue={3.0} />
        </div>
      </div>
    </motion.section>
  );
};

export default Connect;
