import { Button } from '../components';

const Connect = () => {
  return (
    <section>
      <div className=" flex flex-col max-sm:mt-[600px] md:mt-[230px] lg:mt-[320px] ">
        <h1 className="header-text">Connect With us</h1>
        <h3 className="sub-text">
          Join a community of like minded individuals to get{' '}
          <span className="guide-text">exclusive perks</span>, updates and
          resources to traverse your web3 journey
        </h3>

        <div className="flex flex-row gap-2 mt-[7px]">
          <Button
            title="Connect"
            background="bg-secondary"
            textColor="text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Connect;
