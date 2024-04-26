import { useState } from "react"
const Item = ({item,numberOfItems,changeNumberOfItems,numberOfFavorites,changeNumberOfFavorites}) => {

    const [showButtonContent,setShowButtonContent]=useState("...show more")
    const [descriptionContent,setDescriptionContent]=useState(item.description.substring(0,25))
    const [favouriteButtonContent,setFavouriteButtonContent]=useState("star_border") //star
    const [amount,setAmount]=useState(0)
    //Remove item from cart
    const removeItem= () => {
        if (amount!==0){
            setAmount(amount-1)
            if (numberOfItems-1===0){
                changeNumberOfItems("")
            }
            else{changeNumberOfItems(numberOfItems-1)}
            
        }
    }
    //Add item to cart
    const addItem= () => {
        setAmount(amount+1)
        if (numberOfItems===""){
            changeNumberOfItems(1)
        } else{
            changeNumberOfItems(numberOfItems+1)
        }
    }
    //Add product  to favorites or delete from favorites
    const favFunction= () => {
        if (favouriteButtonContent==="star_border"){
            setFavouriteButtonContent("star")
            if (numberOfFavorites===""){
                changeNumberOfFavorites(1)
            } else {
                changeNumberOfFavorites(numberOfFavorites+1)
            }
        } else {
            setFavouriteButtonContent("star_border")
            if (numberOfFavorites===1){
                changeNumberOfFavorites("")
            } else{
                changeNumberOfFavorites(numberOfFavorites-1)
            }
        }
    }
    //Functionalites to show full description or not
    const descFunction=() => {
        if (item.clicked){
            item.clicked=false
            setShowButtonContent("...show more")
            setDescriptionContent(item.description.substring(0,25))
        } else {
            item.clicked=true
            setShowButtonContent("...show less")
            setDescriptionContent(item.description)
        }
    }
    return(
        <div class="col s12 m12 l6">
            <div class="card">
                <div class="card-content">
                <i class="col s1 center material-icons large">image</i>
                <br></br>
                <span class="card-title">{item.name}<a onClick={favFunction} class="btn-flat"><i class="large material-icons right-align">{favouriteButtonContent}</i></a>
                </span>
                <h5 class="right-align"><b>{item.price} €</b></h5>
                <button onClick={addItem} class="right showButton amount-selectors">+</button>
                <p class="amount-selectors right"><b>{amount}</b></p>
                <button onClick={removeItem} class="right showButton amount-selectors"><b>-</b></button>
                <p class="amount-selectors right"><b>Amount: </b></p><br/>
                
                <p class="left-align"><b>Manufacturer: </b>{item.manufacturer}</p>
                <p class="left-align"><b>Description: </b>{descriptionContent}<button class="showButton" onClick={descFunction}>{showButtonContent}</button></p>


            </div>
            </div>
        </div>
        )
}
export default Item

