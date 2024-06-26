import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import { instagram, user, mail, DSA } from '../assets/icons';
import toast from 'react-hot-toast';

import { Footer } from '../sections';

const Reserve = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    social: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
            ...values,
          }),
        }
      );

      const data = await response.json();
      const feed = data.message;

      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          }  bg-gray-800 bg-opacity-30 p-3  text-slate-gray border-green-300   font-palanquin font-extrabold shadow-lg rounded-lg flex flex-row justify-between items-center `}
        >
          <img src={DSA} className="w-[50px] h-[50px]" />
          {feed}
        </div>
      ));
    } catch (error) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          }  bg-gray-800 bg-opacity-30 p-3  text-slate-gray border-red-300   font-palanquin font-extrabold shadow-lg rounded-lg flex flex-row justify-between items-center `}
        >
          <img src={DSA} className="w-[50px] h-[50px]" />
          {error}
        </div>
      ));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

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
        <div className="mt-2">
          <TypingText
            title="Coming Soon"
            textStyles="text-[16px] md:text-[30px] lg:text-[45px] text-gray-200 font-Azeret font-semibold tracking-[2.72px]"
          />
        </div>

        <form className="border flex flex-col border-secondary padding w-[337px] md:w-[480px] md:h-[500px] max-sm:h-[407px] mt-5">
          <h1 className="text-white font-orbitron font-extrabold tracking-wide text-[30px] self-center">
            DSA CORP
          </h1>
          <div className="flex flex-row gap-3 mt-2 items-center">
            <img src={user} alt="user" className="w-[45px] h-[40px]" />
            <form>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
                placeholder="name"
                className="font-Azeret text-slate-gray bg-transparent text-[12px] tracking-wide   outline-none max-w-sm"
              />
            </form>
          </div>

          <hr className="mt-2" />

          <div className="flex flex-row gap-3 items-center mt-5">
            <img src={mail} alt="user" className="w-[45px] h-[40px]" />
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
              placeholder="email"
              className="font-Azeret text-slate-gray text-[12px] tracking-wide bg-transparent  outline-none max-w-sm"
            />
          </div>

          <hr className="mt-2" />

          <div className="flex flex-row gap-3 items-center mt-5">
            <img src={instagram} alt="user" className="w-[45px] h-[40px]" />
            <input
              type="text"
              name="social"
              value={values.social}
              onChange={handleChange}
              required
              placeholder="instagram handle"
              className="font-Azeret text-slate-gray text-[12px] tracking-wide bg-transparent outline-none max-w-sm"
            />
          </div>

          <hr className="mt-2 flex " />

          <div className=" justify-center items-center self-center mt-10">
            <button
              disabled={!values.name || !values.email || !values.social}
              className="flex items-center justify-center border border-secondary rounded-[9px] w-[138px] h-[40px] group hover:scale-110 active:scale-105 transition shadow-md  "
              onClick={handleReserveClick}
            >
              {isLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
              ) : (
                <h1 className="font-Azeret  text-white text-center font-extrabold group-hover:animate-pulse transition">
                  Reserve
                </h1>
              )}
            </button>
          </div>
        </form>
      </div>
      <h3 className="font-Azeret text-[20px] text-slate-gray self-center mt-10 mb-[30px]">
        Exclusive Access
      </h3>
      <div className=" pt-[97px]">
        <Footer />
      </div>
    </motion.section>
  );
};

export default Reserve;
