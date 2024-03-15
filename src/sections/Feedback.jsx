import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer } from '../utils/motion';
import { useActiveSectionContext } from '../../context/useActiveSectionContext';
import { Button } from '../components';
// import { SendFeedback } from '../../actions/SendEmail';

const Feedback = () => {
  const {
    feedbackMail,
    setFeedbackMail,
    feedback,
    setFeedback,
    setIsFeedbackLoading,
    isFeedbackLoading,
  } = useActiveSectionContext();

  const handleEmailChange = (e) => {
    e.preventDefault();
    setFeedbackMail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    e.preventDefault();
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsFeedbackLoading(true);
      // const { error } = await SendFeedback(feedback, feedbackMail);
      // if (error) {
      //   console.error(error);
      //   return;
      // }
    } catch (error) {
      console.error(error);
    } finally {
      setIsFeedbackLoading(false);
    }
  };
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="Show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col gap-5 padding-x mt-[52px]"
    >
      <TitleText title="Feedback" textStyles="header-text" />
      <div className="flex justify-center lg:justify-start md:justify-start">
        <h3 className=" capitalize subheader-text">
          Have we been of any help?
        </h3>
      </div>
      <form className="flex flex-col justify-center gap-7">
        <div className="border border-slate-gray w-auto max-sm:max-w-[300px] md:max-w-full lg:max-w-[800px] py-5 rounded-[20px] bg-slate-gray bg-opacity-30 backdrop-blur-md text-gray-300 ">
          <input
            type="text"
            value={feedbackMail}
            onChange={handleEmailChange}
            placeholder="Your Email"
            className=" bg-transparent outline-none ml-5 placeholder:font-Azeret"
          />
        </div>

        <div className="border border-slate-gray w-auto max-w-[300px] h-[300px] py-5 max-sm:max-w-[300px] md:max-w-full lg:max-w-[800px] rounded-[20px] bg-slate-gray bg-opacity-30 backdrop-blur-md text-gray-300">
          <input
            type="text"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Your Feedback"
            className=" bg-transparent outline-none ml-5 placeholder:font-Azeret max-w-[250px] "
          />
        </div>
        <div className="flex self-center lg:self-start max-w-[100px]">
          <Button
            title="Submit"
            background="bg-slate-gray"
            textColor="text-black"
            isLoading={isFeedbackLoading}
            onClick={handleFeedbackSubmit}
          />
        </div>
      </form>
    </motion.section>
  );
};

export default Feedback;
