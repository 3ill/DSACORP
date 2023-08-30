import { useState } from 'react';
import { Button } from '../components';
import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';

const Subscribe = () => {
  const [mail, setMail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    setMail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(mail);

    try {
      setisLoading(true);
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

      setFeedback(feed);
    } catch (error) {
      console.error(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="subscribe"
      className="absolute  max-sm:top-[1270px] md:top-[1290px] lg:top-[1490px]"
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
            type="text"
            value={mail}
            required
            onChange={handleInputChange}
            placeholder="subscribe@dsacorp.com"
            className="bg-transparent text-slate-gray font-Azeret max-sm:text-[13px] md:text-[15px] lg:text-[17px]  border-none"
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
    </motion.section>
  );
};

export default Subscribe;
