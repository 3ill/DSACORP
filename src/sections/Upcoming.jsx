import { Button } from '../components';

const Upcoming = () => {
  return (
    <section className="absolute top-[400px] md:top-[480px] lg:top-[600px]">
      <div className="flex flex-col  ">
        <h1 className="header-text">Web3: The Genesis</h1>
        <h3 className="sub-text">
          Amidst the intricate tapestry of technical advancements within the
          web3 ecosystem, the pursuit of financial and technological excellence
          has often eclipsed the equally vital dimensions of personal
          development . <br />
          <br />
          While the prospects of monetary gain and technical innovation are
          compelling, we must not overlook the profound impact of web3 on our{' '}
          <span className="guide-text">mental well-being</span>, social
          adeptness, and physical vitality. <br />
          <br />
          Join us to explore the often-overlooked dimensions of web3 - the
          emotional intelligence, social finesse, and physical well-being that
          contribute to not only career success but{' '}
          <span className="guide-text">personal fulfillment</span>. <br />{' '}
          <br />
          The Genesis Workshop empowers you to navigate this intricate landscape
          with a holistic approach, enhancing both your craft and your
          individualit
        </h3>
        <div className="flex flex-row gap-2 mt-[9px]">
          <Button
            title="Reserve"
            background="bg-secondary"
            textColor="text-black"
          />
          <Button
            title="Learn more"
            background="bg-transparent"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
