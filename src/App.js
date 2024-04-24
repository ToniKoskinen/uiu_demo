
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer"
import Dropdown from "./components/Dropdown"
import Collection from './components/Collection';
import { useState } from 'react';
function App() {
  const [numberOfItems,changeNumberOfItems]=useState("")
  const [numberOfFavorites,changeNumberOfFavorites]=useState("")
  return (
   
    <div className="App">
      
      <Header></Header>
      <Dropdown numberOfItems={numberOfItems} numberOfFavorites={numberOfFavorites}></Dropdown>
      <Collection numberOfItems={numberOfItems}
      changeNumberOfItems={changeNumberOfItems} numberOfFavorites={numberOfFavorites} changeNumberOfFavorites={changeNumberOfFavorites}></Collection>
      <Footer numberOfItems={numberOfItems} numberOfFavorites={numberOfFavorites}></Footer>


      
    </div>
    
  );
}

export default App;
