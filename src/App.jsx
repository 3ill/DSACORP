import { Nav } from './components';
import {
  Hero,
  AboutUs,
  Upcoming,
  Connect,
  Subscribe,
  Footer,
} from './sections';

const App = () => {
  return (
    <main className="relative bg-black overflow-x-hidden">
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
      <section className="padding bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
