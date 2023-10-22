import { IG, Whatsapp, Telegram } from '../assets/icons';
import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';

const Connect = () => {
  const handleWhatsappClick = () => {
    const url = 'https://chat.whatsapp.com/Bi4oiqSPt1UB3o1ZXAzDlF';
    window.open(url, '_blank');
  };

  const handleTelegramClick = () => {
    const url = 'https://t.me/+rfYhtYKUn_E2NzJk';
    window.open(url, '_blank');
  };

  const handleInstagramClick = () => {
    const url = 'https://www.instagram.com/dsa_corp/';
    window.open(url, '_blank');
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className=" flex flex-col max-sm:mt-[500px] md:mt-[290px] lg:mt-[350px] ">
        <TitleText title="Connect With Us" textStyles="header-text" />
        <h3 className="sub-text">
          Join a community of like minded individuals to get{' '}
          <span className="guide-text">exclusive perks</span>, updates and
          resources to traverse your web3 journey
        </h3>

        <div className="flex flex-row gap-2  mt-[7px]">
          <img
            src={IG}
            alt="instagram"
            className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] hover:animate-pulse hover:scale-110 active:scale-105 transition"
            onClick={handleInstagramClick}
          />

          <img
            src={Whatsapp}
            alt="whatsapp"
            className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] hover:animate-pulse hover:scale-110 active:scale-105 transition"
            onClick={handleWhatsappClick}
          />
          <img
            src={Telegram}
            alt="telegram"
            className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] hover:animate-pulse hover:scale-110 active:scale-105 transition"
            onClick={handleTelegramClick}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Connect;
