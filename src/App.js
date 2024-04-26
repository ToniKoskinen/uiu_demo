//The page has been implemented using Materialize framework and
//its different designs such as cards, navbars, dropdown menus. 
//https://materializecss.com/

//All except one of the showed "products" in the app are made by ChatGPT, because the
//the goal of this assignment was to demonstrate how would we implement the grocery store app,
//and not pay attention to such details.
import './App.css';
import Header from './components/Header';
import BottomBar from "./components/BottomBar"
import Menu from "./components/Menu"
import Collection from './components/Collection';
import { useState } from 'react';
function App() {
  const [numberOfItems,changeNumberOfItems]=useState("")
  const [numberOfFavorites,changeNumberOfFavorites]=useState("")
  return (
   
    <div className="App">
      
      <Header></Header>
      <Menu numberOfItems={numberOfItems} numberOfFavorites={numberOfFavorites}></Menu>
      <Collection numberOfItems={numberOfItems}
      changeNumberOfItems={changeNumberOfItems} numberOfFavorites={numberOfFavorites} changeNumberOfFavorites={changeNumberOfFavorites}></Collection>
      <BottomBar numberOfItems={numberOfItems} numberOfFavorites={numberOfFavorites}></BottomBar>


      
    </div>
    
  );
}

export default App;
