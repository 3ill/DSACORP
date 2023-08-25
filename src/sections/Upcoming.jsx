import { Button } from '../components';

const Upcoming = () => {
  return (
    <section>
      <div className="flex flex-col absolute top-[400px] md:top-[500px] lg:top-[600px] ">
        <h1 className="header-text">Web3: The Genesis</h1>
        <h3 className="sub-text">
          we are at the forefront of comprehensive community management services
          for Web3.0 projects. Our unwavering mission is to provide steadfast
          support ensuring community members are engaged, well-informed, and
          entertained.
        </h3>
        <div className="flex flex-row gap-2 mt-[7px]">
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
