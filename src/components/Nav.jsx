import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill } from 'react-icons/ri';
const Nav = () => {
  const [isToggled, setIsToggled] = useState(true);
  const handleIsToggled = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
    console.log(isToggled);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <div className="flex justify-end max-sm:hidden lg:mr-5">
        <button className="flex justify-center items-center gap-2 px-7 py-4 bg-secondary rounded-full font-mono font-extrabold">
          Subscribe
        </button>
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
            <button className="bg-transparent border border-secondary rounded-full flex items-center px-5 py-3 shadow-md">
              <h1 className="font-mono font-extrabold text-white">Subscribe</h1>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
