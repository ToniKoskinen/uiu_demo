import M from "materialize-css"
import {useEffect, useState} from "react"

const Dropdown = () => {
    
    useEffect(() => {
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {aligment: "center",coverTrigger: false, hover: true});
        var tabs = document.querySelectorAll(".tabs")
        M.Tabs.init(tabs,{})


      }, []);
    
    return(<div>
      <div class="row">
          <form class="white col s10 offset-s1 hide-on-large-only">
                <div class="input-field">
                <input id="search" type="search" required/>
                <label for="search text-center"><i class="tiny material-icons search-icon">search</i>  Search for products</label>
                <i class="material-icons">close</i>
                
                </div>
                
          </form>
      </div>
      <div class="row col s12 hide-on-large-only">
        <a class='col s10 offset-s1 m10 offset-m1 grey lighten-2 dropdown-trigger btn black-text' href='#' data-target='dropdown1'>Categories</a>
      
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
        <nav class="hide-on-med-and-down">
            <div class="nav-wrapper grey lighten-2">


            <div class="category-wrapper">
            <ul class="category-list col s8 center">
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
      
      <form class="col s4 right">
                <div class="input-field">
                <input id="search" type="search" required/>
                <label class="label-icon" for="search"><i class="material-icons search-icon">search</i></label>
                <i class="material-icons">close</i>
                </div>
            </form>
            
      </div>
            
        </nav>
        
            
        
        </div>

        
        )
}

export default Dropdown