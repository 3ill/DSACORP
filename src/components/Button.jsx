const Button = ({ title, background, textColor, onClick }) => {
  return (
    <button
      className={`${background} border border-secondary rounded-[20px] flex items-center px-5 py-3 shadow-md`}
      onClick={onClick}
    >
      <h1
        className={`${textColor} font-Azeret font-semibold max-sm:text-[13px] md:text-[16px] lg:text-[18px]`}
      >
        {title}
      </h1>
    </button>
  );
};

export default Button;
