import { useActiveSectionContext } from '../../context/useActiveSectionContext';

const Button = ({
  title,
  background,
  textColor,
  onClick,
  href,
  animate,
  disabled,
}) => {
  const { isLoading } = useActiveSectionContext();
  return (
    <button disabled={disabled} type="submit">
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
          <h1
            className={`${textColor} font-Azeret font-semibold max-sm:text-[13px] md:text-[16px] lg:text-[18px] group-hover:pulse-animation group-hover:translate-y-1 transition `}
          >
            {title}
          </h1>
        )}
      </a>
    </button>
  );
};

export default Button;
