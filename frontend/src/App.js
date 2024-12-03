import { Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Products from './Components/Products';
import Nav from './Components/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
