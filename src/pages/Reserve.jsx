import { useState } from 'react';
import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import { instagram, user, mail } from '../assets/icons';

import { Footer } from '../sections';

const Reserve = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    social: '',
  });

  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReserveClick = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://dsacorp-server.vercel.app/api/v1/dsacorp/newUser',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            ...form,
          }),
        }
      );

      const data = await response.json();
      const feed = data.message;
      setFeedback(feed);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
        <TitleText
          title="Web3: The Genesis"
          textStyles="header-text text-center"
        />
        <TypingText
          title="Coming Soon"
          textStyles="text-[25px] mt-5 font-Azeret text-slate-gray text-center"
        />

        <form className="border flex flex-col border-secondary padding w-[337px] md:w-[380px] md:h-[500px] max-sm:h-[407px] mt-5">
          <h1 className="text-white font-orbitron font-extrabold text-[34px] self-center">
            DSA
          </h1>
          <div className="flex flex-row gap-3 items-center">
            <img src={user} alt="user" className="w-[45px] h-[40px]" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="name"
              className="font-Azeret text-slate-gray bg-transparent text-[12px] tracking-wide max-w-sm"
            />
          </div>

          <hr className="mt-2" />

          <div className="flex flex-row gap-3 items-center mt-5">
            <img src={mail} alt="user" className="w-[45px] h-[40px]" />
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="email"
              className="font-Azeret text-slate-gray text-[12px] tracking-wide bg-transparent max-w-sm"
            />
          </div>

          <hr className="mt-2" />

          <div className="flex flex-row gap-3 items-center mt-5">
            <img src={instagram} alt="user" className="w-[45px] h-[40px]" />
            <input
              type="text"
              name="social"
              value={form.social}
              onChange={handleChange}
              required
              placeholder="instagram handle"
              className="font-Azeret text-slate-gray text-[12px] tracking-wide bg-transparent max-w-sm"
            />
          </div>

          <hr className="mt-2 flex " />

          <div className=" justify-center items-center self-center mt-10">
            <button
              disabled={!form.name || !form.email || !form.social}
              className="flex items-center justify-center border border-secondary rounded-[3px] w-[138px] h-[40px] group "
              onClick={handleReserveClick}
            >
              <h1 className="font-Azeret  text-white text-center font-extrabold group-hover:animate-pulse">
                Reserve
              </h1>
            </button>
          </div>
        </form>
        {isLoading && (
          <p className="text-slate-gray text-[15px] mt-3 mb-3 self-center font-Azeret">
            Please Wait
          </p>
        )}
        {feedback && (
          <p className="text-white font-semibold text-[15px] mt-3 mb-3 self-center font-Azeret">
            {feedback}
          </p>
        )}
      </div>
      <h3 className="font-Azeret text-[20px] text-slate-gray self-center mt-10">
        Exclusive Access
      </h3>
      <Footer />
    </motion.section>
  );
};

export default Reserve;
