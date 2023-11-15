import { useActiveSectionContext } from '../../context/useActiveSectionContext';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill } from 'react-icons/ri';
import { navLinks } from '../../constants';
// import Button from './Button';
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
      className=" padding-x py-8 absolute z-10 w-full items-center"
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
      <div className="fixed left-[24px] top-0  bg-secondary bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] max-sm:top-4 max-sm:h-[3.25rem] self-center max-sm:w-[22rem] max-sm:rounded-full md:hidden items-center ">
        <div className="flex flex-row justify-between px-2 items-center py-3">
          <img
            src={DSA}
            alt="logo"
            width={40}
            height={40}
            className=" hover:animate-spin"
          />

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
        {!isToggled && (
          <>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="fixed top-9 left-[24px] p-5  w-[22rem] h-[15rem]  shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-secondary dark:border-black/40 bg-opacity-80 md:hidden items-end  z-[-999] rounded-[9px]"
            ></motion.div>

            <motion.nav
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex flex-col top-[90px] left-[270px] fixed md:hidden "
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    href={link.hash}
                    key={link.name}
                    onClick={() => setIsActive(link.name)}
                  >
                    <p
                      className={`${
                        isActive === link.name
                          ? ' text-white font-bold font-satoshi lg:text-[20px] md:text-[16px] hover:text-white hover:scale-110 active:scale-105 transition-all'
                          : ' text-black font-bold font-satoshi lg:text-[20px] md:text-[16px] hover:text-white hover:scale-110 active:scale-105'
                      }`}
                    >
                      {link.name}
                    </p>
                  </a>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default Nav;
