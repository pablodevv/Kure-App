import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Summary from './pages/Summary';
import Checkout from './pages/Checkout';
import UpsellMetabolismo from './pages/UpsellMetabolismo';
import Upsell2 from './pages/Upsell2';
import Downsell1 from './pages/Downsell1';
import Upsell3 from './pages/Upsell3';
import Downsell2 from './pages/Downsell2';
import Obrigado from './pages/Obrigado';
import UpsellFinal from './pages/UpsellFinal';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Rola a página para o topo sempre que a URL mudar
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/upsell1" element={<UpsellMetabolismo />} />
        <Route path="/Upsell2" element={<Upsell2 />} />
        <Route path="/downsell1" element={<Downsell1 />} />
        <Route path="/Upsell3" element={<Upsell3 />} />
        <Route path="/downsell2" element={<Downsell2 />} />
        <Route path="/Obrigado" element={<Obrigado />} />
        <Route path="/UpsellFinal" element={<UpsellFinal />} />
      </Routes>
    </Router>
  );
}

export default App;
