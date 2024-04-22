
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer"
import Dropdown from "./components/Dropdown"
import Collection from './components/Collection';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dropdown></Dropdown>
      <Collection></Collection>
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;
