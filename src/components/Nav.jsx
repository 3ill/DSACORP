import { useActiveSectionContext } from '../../context/useActiveSectionContext';
import { AnimatePresence, motion } from 'framer-motion';
import { navVariants, planetVariants } from '../utils/motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill } from 'react-icons/ri';
import { navLinks } from '../../constants';
import { DSA } from '../assets/icons';
import { useRef } from 'react';

const Nav = () => {
  const { isToggled, setIsToggled, isActive, setIsActive } =
    useActiveSectionContext();
  const scrollRef = useRef();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleIsToggled = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };
  return (
    <motion.nav className=" padding-x py-8 absolute z-10 w-full items-center">
      <div
        ref={scrollRef}
        className="flex flex-row gap-2 justify-between max-sm:hidden items-center"
      >
        <motion.img
          variants={planetVariants('right')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          id="img"
          src={DSA}
          alt="logo"
          width={80}
          height={80}
        />
        <ul className="flex flex-row gap-[30px] lg:gap-[35px]">
          {navLinks.map((link) => (
            <a
              href={link.hash}
              key={link.name}
              onClick={() => setIsActive(link.name)}
            >
              <p
                id="nav"
                className={`${
                  isActive === link.name
                    ? ' text-white font-bold font-grotesk lg:text-[20px] md:text-[16px] hover:text-white hover:scale-110 active:scale-105 transition-all'
                    : ' text-gray-400 font-bold font-grotesk lg:text-[20px] md:text-[16px] hover:text-white hover:scale-110 active:scale-105'
                }`}
              >
                {link.name}
              </p>
            </a>
          ))}
        </ul>
      </div>
      <div className="sm:hidden fixed left-[28px] right-[15px] w-[22rem] shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-[#101010] dark:border-black/40 bg-opacity-50 rounded-md">
        <div className="flex flex-row justify-between px-2 items-center py-3 ">
          <img
            id="mobile_logo"
            src={DSA}
            alt="logo"
            width={40}
            height={40}
            className=" hover:animate-spin"
          />

          {isToggled ? (
            <RxHamburgerMenu
              color="#ffff"
              className="w-[50px] h-[25px] "
              onClick={handleIsToggled}
            />
          ) : (
            <RiCloseFill
              color="#ffff"
              className="w-[50px] h-[25px] "
              onClick={handleIsToggled}
            />
          )}
        </div>
      </div>

      <div className="fixed -z-50">
        <AnimatePresence>
          {!isToggled && (
            <motion.section
              variants={variants}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              transition={{
                delay: 0.1,
                ease: 'easeInOut',
                duration: 0.5,
              }}
            >
              <motion.div className="fixed top-9 left-[28px]  p-5  w-[22rem] h-[15rem]  shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-[#101010] dark:border-black/40 bg-opacity-50 md:hidden items-end  z-[-999] rounded-[9px]"></motion.div>

              <motion.nav className="flex flex-col top-[90px] left-[270px] fixed md:hidden ">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      href={link.hash}
                      key={link.name}
                      onClick={() => setIsActive(link.name)}
                      className="text-[18px] font-grotesk "
                    >
                      <p
                        className={`${
                          isActive === link.name
                            ? ' text-white font-bold font-grotesk  hover:text-white hover:scale-110 active:scale-105 transition-all'
                            : ' text-white font-bold font-grotesk  hover:text-white hover:scale-110 active:scale-105'
                        }`}
                      >
                        {link.name}
                      </p>
                    </a>
                  ))}
                </ul>
              </motion.nav>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Nav;
