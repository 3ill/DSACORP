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
    <section>
      <div className="flex flex-col absolute top-[870px] md:top-[1030px] lg:top-[1210px]  ">
        <h1 className="header-text">
          Subscribe For Updates <br /> & Newsletter
        </h1>
        <form className="flex flex-row justify-between border rounded-[20px] px-2 py-2 self-center mr-5 lg:max-w-[1600px] md:gap-[230px]">
          <input
            type="text"
            value={mail}
            onChange={handleInputChange}
            placeholder="subscribe@dsacorp.com"
            className="bg-transparent text-slate-gray border-none"
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
