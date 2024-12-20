import { Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Products from './Components/Products';
import ProductDisplay from "./Components/ProductDisplay";
import Techniquespage from "./Components/Techniquespage";
import Nav from './Components/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/ProductDisplay/:productID" element={<ProductDisplay />} />
        <Route path="/Techniquespage" element={<Techniquespage />} />
      </Routes>
    </Router>
  );
}

export default App;
