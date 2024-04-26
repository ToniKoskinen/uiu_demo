
const BottomBar = ({numberOfItems,numberOfFavorites}) => {
    return(
        
        <nav class="row grey lighten-4 footer">
        <div class="col s12">
      <ul>
        <li class="col s6">
            
            <a href="#test1" class="footer-a">
            <i class="material-icons large">star</i><span class="black-text">Favorites {numberOfFavorites}</span>
            </a></li>
        <li class="col s6"><a href="#test2" class="footer-a black-text"><i class="material-icons large">shopping_cart</i>Shopping Cart {numberOfItems}</a></li>
      </ul>
    </div>

  </nav>
    
    )
}
export default BottomBar