const Button = ({
  title,
  background,
  textColor,
  onClick,
  href,
  animate,
  disabled,
}) => {
  return (
    <button disabled={disabled}>
      <a
        href={href}
        className={`${background}  ${animate} border border-secondary rounded-[20px] flex items-center px-5 py-3 shadow-md group hover:scale-110 active:scale-105 transition`}
        onClick={onClick}
      >
        <h1
          className={`${textColor} font-Azeret font-semibold max-sm:text-[13px] md:text-[16px] lg:text-[18px] group-hover:pulse-animation group-hover:translate-y-1 transition `}
        >
          {title}
        </h1>
      </a>
    </button>
  );
};

export default Button;
