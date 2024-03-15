import { FaPaperPlane } from 'react-icons/fa';

const Button = ({
  title,
  background,
  textColor,
  onClick,
  href,
  animate,
  disabled,
  isLoading,
}) => {
  return (
    <button className="w-[fit-content]" disabled={disabled} type="submit">
      <a
        href={href}
        className={`${background}  ${animate} border border-secondary rounded-[20px] flex items-center px-5 py-3 shadow-md group hover:scale-110 active:scale-105 transition outline-none w-auto ${
          isLoading ? 'bg-opacity-65 backdrop-blur-sm' : ''
        }`}
        onClick={onClick}
      >
        {isLoading ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <div className="flex flex-row items-center gap-2">
            <h1
              className={`${textColor} font-Azeret font-semibold max-sm:text-[13px] md:text-[16px] lg:text-[18px] group-hover:pulse-animation group-hover:translate-y-1 transition `}
            >
              {title}
            </h1>

            <FaPaperPlane className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        )}
      </a>
    </button>
  );
};

export default Button;
