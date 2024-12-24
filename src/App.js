import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import './page/Home';
import './page/Contact';
import './page/About';
import Home from './page/Home';
import Contact from './page/Contact';
import About from './page/About';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {/* <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul> */}
          
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
