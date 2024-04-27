import { TitleText } from '../components/CustomTexts';
import { Tilt } from 'react-tilt';
import { Profile } from '../assets';
import { Linkedin, Twitter, instagram } from '../assets/icons';
import {
  handleFounderInstagramClick,
  handleFounderLinkedinClick,
  handleFounderTwitterClick,
} from '../../actions';

const Founder = () => {
  return (
    <section className="flex flex-col md:flex-row  gap-2">
      <div className="flex flex-col">
        <TitleText
          title="Meet the founder"
          textStyles="header-text capitalize"
        />
        <p className="sub-text">
          Martins Victor, who goes by the alias{' '}
          <span className="guide-text">DarkSkinAlien</span>, is the founder of{' '}
          <span className="guide-text">DSA CORP</span>. <br /> <br /> He is not
          only a distinguished figure within the Web3 landscape but also
          functions as a <span className="guide-text">community engineer</span>{' '}
          and a trusted <span className="guide-text">Web3 guide</span> with a
          profound comprehension of Web3&apos;s transformative potential. <br />{' '}
          <br /> DSA firmly believes in the power of community and collaboration
          as the cornerstone of success, not only within the dynamic Web3 space
          but as a fundamental principle that extends to all aspects of life.
        </p>
      </div>
      <div className="flex flex-col">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="w-[350px] h-[450px] lg:w-[500px] lg:h-[600px] bg-transparent shadow-md p-8"
        >
          <div className=" pb-5 justify-center items-center flex flex-col ">
            <img
              src={Profile}
              className="object-cover w-[250px] h-[250px] lg:w-[550px] lg:h-[550px] rounded-[9px] shadow-md"
            />

            <div className="flex flex-row gap-5 p-2">
              <button onClick={handleFounderLinkedinClick}>
                <img
                  src={Linkedin}
                  className="w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] hover:animate-pulse hover:scale-110 active:scale-105 transition"
                />
              </button>

              <button onClick={handleFounderInstagramClick}>
                <img
                  src={instagram}
                  className="w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] hover:animate-pulse hover:scale-110 active:scale-105 transition"
                />
              </button>

              <button onClick={handleFounderTwitterClick}>
                <img
                  src={Twitter}
                  className="w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] hover:animate-pulse hover:scale-110 active:scale-105 transition"
                />
              </button>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Founder;
