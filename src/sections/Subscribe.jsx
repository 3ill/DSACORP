import { useState } from 'react';
import { Button } from '../components';
const Subscribe = () => {
  const [mail, setMail] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    setMail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail);
  };

  return (
    <section
      id="subscribe"
      className="absolute  max-sm:top-[1270px] md:top-[1290px] lg:top-[1460px]"
    >
      <div className="flex flex-col   ">
        <h1 className="header-text">
          Subscribe For Updates <br /> & Newsletter
        </h1>
        <form className="flex flex-row justify-between border relative rounded-[20px] px-2 py-2 max-sm:mr-5 lg:max-w-[800px] md:max-w-[700px] max-sm:max-w-sm  md:gap-[230px]">
          <input
            type="text"
            value={mail}
            required
            onChange={handleInputChange}
            placeholder="subscribe@dsacorp.com"
            className="bg-transparent text-slate-gray font-Azeret max-sm:text-[13px] md:text-[15px] lg:text-[17px]  border-none"
          />
          <div>
            <Button
              title="Subscribe"
              background="bg-secondary"
              textColor="text-black"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
