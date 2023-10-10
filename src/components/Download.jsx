import { PitchDeck } from '../assets/icons';
const Download = ({ title, background, textColor, onClick, animate }) => {
  const pdfFile = 'PitchDeck.pdf';

  return (
    <a
      href={PitchDeck}
      download={pdfFile}
      className={`${background}  ${animate} border border-secondary rounded-[20px] flex items-center px-5 py-3 shadow-md group hover:scale-110 active:scale-105 transition `}
      onClick={onClick}
    >
      <h1
        className={`${textColor} font-Azeret font-semibold max-sm:text-[13px] md:text-[16px] lg:text-[18px] group-hover:pulse-animation group-hover:translate-y-1 `}
      >
        {title}
      </h1>
    </a>
  );
};

export default Download;
