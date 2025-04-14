import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Summary from './pages/Summary';
import Checkout from './pages/Checkout';
import UpsellMetabolismo from './pages/UpsellMetabolismo';
import Upsell2 from './pages/Upsell2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/upsell1" element={<UpsellMetabolismo />} />
        <Route path="/Upsell2" element={<Upsell2 />} />
      </Routes>
    </Router>
  );
}





export default App;
