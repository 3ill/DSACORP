import { Home, Reserve, LearnMore } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <main className="relative  bg-black overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<LearnMore />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
