import M from "materialize-css"
import {useEffect} from "react"
//Contains dropdown/navbar menus depending screen width
const Menu = ({numberOfItems,numberOfFavorites}) => {
    
    useEffect(() => {
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {aligment: "center",coverTrigger: false});



      }, []);
    
    return(<div>
        <nav class="hide-on-med-and-down col s12 center">
            <div class="nav-wrapper grey lighten-2">


            <div class="category-wrapper">
            <ul class="category-list">
                <li><a href="#!" class="center-align black-text"><b>Fruits and vegetables</b></a></li>
                <li><a href="#!" class="center-align black-text"><b>Meat</b></a></li>
                <li><a href="#!" class="center-align black-text"><b>Milk products</b></a></li>
                <li><a href="#!" class="center-align black-text"><b>Bread</b></a></li>
                <li><a href="#!" class="center-align black-text"><b>Grain</b></a></li>
                <li><a href="#!" class="center-align black-text"><b>Drinks</b></a></li>
                <li><a href="#!" class="center-align black-text"><b>Hygiene</b></a></li>
                <li><a href="#!" class="center-align black-text"><b>Housekeeping</b></a></li>

            </ul>
            <ul class="right purchases">
            <li>
                <a href="#test1" class="black-text"><b>Favorites {numberOfFavorites}</b>
                <i class="material-icons large right">star</i>
                </a></li>
                <li><a href="#test2" class="black-text"><b>Shopping cart {numberOfItems}</b><i class="material-icons large right">shopping_cart</i></a></li>
                
            </ul>

            </div>

      

            
      </div>
            
        </nav>



      <div class="row search-box">
          <form class="white col s10 offset-s1 m10 offset-m1 l6 offset-l3">
                <div class="input-field">
                <input id="search" type="search" required/>
                <label for="search text-center"><i class="tiny material-icons search-icon">search</i>  Search for products</label>
                <i class="material-icons">close</i>  
              </div>
                
          </form>
      </div>
      <div class="row col s12 hide-on-large-only">
        <a class='col s10 offset-s1 m10 offset-m1 grey lighten-2 dropdown-trigger center-align btn black-text center-align' href='#!' data-target='dropdown1'>Categories<i class="material-icons right">arrow_drop_down</i></a>
      
        <ul id='dropdown1' class='dropdown-content'>
          <li><a href="#!" class="center-align black-text">Fruits and vegetables</a></li>
          <li><a href="#!" class="center-align black-text">Meat</a></li>
          <li><a href="#!" class="center-align black-text">Milk products</a></li>
          <li><a href="#!" class="center-align black-text">Bread</a></li>
          <li><a href="#!" class="center-align black-text">Grain</a></li>
          <li><a href="#!" class="center-align black-text">Drinks</a></li>
          <li><a href="#!" class="center-align black-text">Hygiene</a></li>
          <li><a href="#!" class="center-align black-text">Housekeeping</a></li>
          
          

        </ul>
        
        </div>

 

        
            
        
        </div>

        
        )
}

export default Menu