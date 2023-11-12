import { useActiveSectionContext } from '../../context/useActiveSectionContext';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill } from 'react-icons/ri';
import { navLinks } from '../../constants';
import Button from './Button';
import { DSA } from '../assets/icons';

const Nav = () => {
  const { isToggled, setIsToggled, isActive, setIsActive } =
    useActiveSectionContext();

  const handleIsToggled = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };
  return (
    <motion.nav
      variants={navVariants}
      whileInView="show"
      className=" padding-x py-8 absolute z-10 w-full"
    >
      <div className="flex flex-row gap-2 justify-between max-sm:hidden items-center">
        <img src={DSA} alt="logo" width={80} height={80} />
        <ul className="flex flex-row gap-[30px] lg:gap-[35px]">
          {navLinks.map((link) => (
            <a
              href={link.hash}
              key={link.name}
              onClick={() => setIsActive(link.name)}
            >
              <p
                className={`${
                  isActive === link.name
                    ? ' text-white font-normal font-Azeret lg:text-[20px] md:text-[16px] hover:text-white hover:scale-110 active:scale-105 transition-all'
                    : ' text-gray-400 font-normal font-Azeret lg:text-[20px] md:text-[16px] hover:text-white hover:scale-110 active:scale-105'
                }`}
              >
                {link.name}
              </p>
            </a>
          ))}
        </ul>
      </div>
      <div className="fixed top-0 w-full bg-secondary bg-opacity-60 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] max-sm:top-6 max-sm:h-[3.25rem] max-sm:w-[20rem] max-sm:rounded-full md:hidden items-center ">
        <div className="flex flex-row justify-between px-2 items-center py-3">
          <img src={DSA} alt="logo" width={40} height={40} />

          {isToggled ? (
            <RxHamburgerMenu
              color="#ffff"
              className="w-[50px] h-[25px]"
              onClick={handleIsToggled}
            />
          ) : (
            <RiCloseFill
              color="#ffff"
              className="w-[50px] h-[25px]"
              onClick={handleIsToggled}
            />
          )}
        </div>
      </div>

      <div>
        {/* {!isToggled && (
          <div className="lg:hidden md:hidden absolute top-[115px] right-[30px]">
            <Button
              href="#subscribe"
              title="subscribe"
              background="bg-transparent"
              animate="animate-slide-down"
              textColor="text-white"
            />
          </div>
        )} */}
      </div>
    </motion.nav>
  );
};

export default Nav;
