import { Nav } from '../components';
import {
  Hero,
  AboutUs,
  Upcoming,
  Connect,
  Subscribe,
  Footer,
} from '../sections';

const Home = () => {
  return (
    <>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <AboutUs />
      </section>
      <section className="padding">
        <Upcoming />
      </section>
      <section className="padding">
        <Connect />
      </section>
      <section className="padding ">
        <Subscribe />
      </section>
      <section className=" padding bg-black">
        <Footer />
      </section>
    </>
  );
};

export { Home };
