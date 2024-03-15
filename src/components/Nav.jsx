import { useActiveSectionContext } from '../../context/useActiveSectionContext';
import { AnimatePresence, motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill } from 'react-icons/ri';
import { navLinks } from '../../constants';
import { DSA } from '../assets/icons';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const { isToggled, setIsToggled, isActive, setIsActive } =
    useActiveSectionContext();
  const scrollRef = useRef();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  useGSAP(() => {
    gsap.fromTo(
      '#nav',
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.5,
        yoyo: true,

        ease: 'power1.inOut',
      }
    );

    gsap.to('#menu_target', {
      opacity: 1,
      y: 0,
    });
    gsap.to('#img', {
      x: 250,
      yoyo: true,
      duration: 2,
      rotation: 360,
      scrollTrigger: {
        trigger: '#img',
        start: 'top top', // When the top of the navbar hits the top of the viewport
        end: '+=500', // Animation will end after scrolling 500 pixels down
        toggleActions: 'play none none reverse',
      },
      ease: 'power1.inOut',
    });
    gsap.fromTo(
      '#mobile_logo',
      {
        x: 200,
        opacity: 1,
        yoyo: true,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.9,
        rotation: 360,
        ease: 'power1.inOut',
      }
    );
  }, []);

  const handleIsToggled = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };
  return (
    <motion.nav
      variants={navVariants}
      whileInView="show"
      className=" padding-x py-8 absolute z-10 w-full items-center"
    >
      <div
        ref={scrollRef}
        className="flex flex-row gap-2 justify-between max-sm:hidden items-center"
      >
        <img id="img" src={DSA} alt="logo" width={80} height={80} />
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
      <div
        id="menu_target"
        className="fixed left-[28px] right-[10px] top-0  bg-[#101010] bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] max-sm:top-4 max-sm:h-[3.25rem] self-center max-sm:w-[22rem] rounded-br-none rounded-bl-none rounded-tr-md rounded-tl-md sm:hidden items-center opacity-0 translate-y-20 "
      >
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
                      className="text-[18px]"
                    >
                      <p
                        className={`${
                          isActive === link.name
                            ? ' text-white font-bold font-satoshi  hover:text-white hover:scale-110 active:scale-105 transition-all'
                            : ' text-white font-bold font-satoshi  hover:text-white hover:scale-110 active:scale-105'
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
