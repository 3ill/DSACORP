import { Home, Reserve, LearnMore } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <Router>
      <main className="relative  bg-black overflow-x-hidden scroll-smooth transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/learn" element={<LearnMore />} />
        </Routes>
        <Analytics />
      </main>
    </Router>
  );
};

export default App;
