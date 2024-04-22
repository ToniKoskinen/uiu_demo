import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer"
import Dropdown from "./components/Dropdown"
import Collection from './components/Collection';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={[<Header></Header>, <Dropdown></Dropdown>,<Collection></Collection>,<Footer></Footer>]}></Route>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
