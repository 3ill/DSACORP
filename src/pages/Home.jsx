import { Nav } from '../components';
import {
  Hero,
  AboutUs,
  Web3,
  Opportunity,
  Upcoming,
  Founder,
  Connect,
  Subscribe,
  // Feedback,
  Footer,
} from '../sections';
import { Toaster } from 'react-hot-toast';
import ActiveSectionProvider from '../../context/active-section-context';

const Home = () => {
  return (
    <>
      <ActiveSectionProvider>
        <Nav />
        <section className=" ">
          <Hero />
        </section>
        <section className="flex flex-col padding-x justify-center py-10">
          <AboutUs />
        </section>
        <section className="padding-x py-10">
          <Web3 />
        </section>
        <section className="padding-x py-10">
          <Opportunity />
        </section>
        <section className="padding-x py-10">
          <Upcoming />
        </section>
        <section className="padding-x py-10">
          <Founder />
        </section>
        <section className="padding-x py-10">
          <Connect />
        </section>
        <section className="padding-x py-10 ">
          <Subscribe />
        </section>
        {/* <Feedback /> */}
        <section className=" padding bg-black">
          <Footer />
        </section>
        <Toaster position="bottom-right" />
      </ActiveSectionProvider>
    </>
  );
};

export { Home };
