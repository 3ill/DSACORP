import { useState } from 'react';
import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';
import { TypingText } from '../components/CustomTexts';
import { instagram, user, mail } from '../assets/icons';
import { Footer } from '../sections';

const Reserve = () => {
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userHandle, setUserHandle] = useState('');

  const handleUserChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleMailChange = (e) => {
    e.preventDefault();
    setUserMail(e.target.value);
  };

  const handleInstaChange = (e) => {
    e.preventDefault();
    setUserHandle(e.target.value);
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="padding flex flex-col bg-hero"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="header-text text-center">Web3: The Genesis</h1>
        <TypingText
          title="Coming Soon"
          textStyles="text-[20px] mt-5 font-Azeret text-secondary text-center"
        />

        <div className="border flex flex-col border-secondary padding w-[337px] md:w-[380px] md:h-[380px] h-[377px] mt-5">
          <div className="flex flex-row gap-3 items-center">
            <img src={user} alt="user" className="w-[40px] h-[40px]" />
            <input
              type="text"
              value={userName}
              onChange={handleUserChange}
              required
              placeholder="DSA CORP"
              className="font-Azeret text-slate-gray bg-transparent text-[12px] tracking-wide max-w-sm"
            />
          </div>

          <hr className="mt-2" />

          <div className="flex flex-row gap-3 items-center mt-5">
            <img src={mail} alt="user" className="w-[40px] h-[40px]" />
            <input
              type="text"
              value={userMail}
              onChange={handleMailChange}
              required
              placeholder="DSACORP@RESERVE.COM"
              className="font-Azeret text-slate-gray text-[12px] tracking-wide bg-transparent max-w-sm"
            />
          </div>

          <hr className="mt-2" />

          <div className="flex flex-row gap-3 items-center mt-5">
            <img src={instagram} alt="user" className="w-[40px] h-[40px]" />
            <input
              type="text"
              value={userHandle}
              onChange={handleInstaChange}
              required
              placeholder="instagram.com/dsa_corp"
              className="font-Azeret text-slate-gray text-[12px] tracking-wide bg-transparent max-w-sm"
            />
          </div>

          <hr className="mt-2 flex " />

          <div className=" justify-center items-center self-center mt-10">
            <button className="flex items-center justify-center border border-secondary rounded-[3px] w-[138px] h-[40px] ">
              <h1 className="font-Azeret  text-white text-center font-extrabold">
                Reserve
              </h1>
            </button>
          </div>
        </div>
      </div>
      <h3 className="font-Azeret text-[20px] text-slate-gray self-center mt-10">
        Exclusive Access
      </h3>
      <Footer />
    </motion.section>
  );
};

export default Reserve;
