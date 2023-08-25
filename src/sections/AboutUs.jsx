const AboutUs = () => {
  return (
    <section>
      <div className="flex flex-col absolute top-[200px] lg:top-[350px] md:top-[270px]">
        <h1 className="text-white text-[30px] lg:text-[50px] md:text-[40px] font-mono font-extrabold ">
          About Us
        </h1>
        <h3 className="info-text text-left text-sm md:text-lg lg:text-[25px] lg:max-w-[1400px] md:leading-7 lg:leading-9 max-w-lg">
          At DSA CORP, we believe that communities are the heartbeat of the Web3
          revolution. They serve as the catalysts for change, igniting the spark
          of innovation and collaboration that propels us towards a
          decentralized future.
        </h3>
      </div>
    </section>
  );
};

export default AboutUs;
