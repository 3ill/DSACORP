import { Nav } from './components';
import { Hero, AboutUs, Upcoming, Subscribe, Footer } from './sections';

const App = () => {
  return (
    <main className="relative bg-black">
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
      <section className="padding-x sm:py-32 py-16 w-full bg-black ">
        <Subscribe />
      </section>
      <section className="padding bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
