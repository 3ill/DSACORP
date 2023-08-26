import { useState } from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill } from 'react-icons/ri';
import Button from './Button';

const Nav = () => {
  const [isToggled, setIsToggled] = useState(true);
  const handleIsToggled = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
    console.log(isToggled);
  };
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="padding-x py-8 absolute z-10 w-full"
    >
      <div className="flex justify-end max-sm:hidden lg:mr-5">
        <Button
          href="#subscribe"
          title="Subscribe"
          background="bg-secondary"
          textColor="text-black"
        />
      </div>
      <div className="flex justify-end lg:hidden md:hidden">
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

      <div>
        {!isToggled && (
          <div className="lg:hidden md:hidden absolute top-[115px] right-[30px]">
            <button className="bg-transparent border border-secondary rounded-[20px] flex items-center px-5 py-3 shadow-md animate-slide-down">
              <h1 className=" font-Azeret font-extrabold text-white">
                Subscribe
              </h1>
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Nav;
