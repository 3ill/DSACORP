import { Button } from '../components';
import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';
import { useActiveSectionContext } from '../../context/useActiveSectionContext';
import toast from 'react-hot-toast';
import { DSA } from '../assets/icons';

const Subscribe = () => {
  const { mail, setMail, setIsLoading } = useActiveSectionContext();

  const handleInputChange = (e) => {
    e.preventDefault();
    setMail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(mail);

    try {
      setIsLoading(true);
      const response = await fetch(
        'https://dsacorp-server.vercel.app/api/v1/dsacorp/subscribe',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ email: mail }),
        }
      );

      const data = await response.json();

      const feed = data.message;

      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          }  bg-black bg-opacity-30 p-3  text-slate-gray border-green-300   font-palanquin font-extrabold shadow-lg rounded-lg flex flex-row justify-between items-center `}
        >
          <img src={DSA} className="w-[50px] h-[50px]" />
          {feed}
        </div>
      ));
    } catch (error) {
      console.error(error);

      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          }  bg-black bg-opacity-30 p-3  text-slate-gray border-red-300   font-palanquin font-extrabold shadow-lg rounded-lg flex flex-row justify-between items-center `}
        >
          <img src={DSA} className="w-[50px] h-[50px]" />
          {error}
        </div>
      ));
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
      id="subscribe"
      className=" md:top-[1890px] lg:top-[2200px]"
    >
      <div className="flex flex-col   ">
        <TitleText
          title={
            <>
              Subscribe For Updates <br /> & Newsletter
            </>
          }
          textStyles="header-text"
        />
        <form className="flex flex-row justify-between border relative rounded-[20px] px-2 py-2 max-sm:mr-5 lg:max-w-[800px] md:max-w-[700px] max-sm:max-w-sm mt-3  md:gap-[230px]">
          <input
            type="email"
            name="mail"
            value={mail}
            required
            onChange={handleInputChange}
            placeholder="subscribe@dsacorp.com"
            className="bg-transparent  text-slate-gray font-Azeret max-sm:text-[13px] md:text-[15px] lg:text-[17px] outline-none border-none"
          />
          <div>
            <Button
              title="Subscribe"
              background="bg-secondary"
              textColor="text-black"
              onClick={handleSubmit}
              disabled={!mail}
            />
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Subscribe;
