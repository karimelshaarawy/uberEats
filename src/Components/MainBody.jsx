import React from "react";
import "./Css/mainBody.css"
import CategoriesScrollView from "./CategoriesScrollView";
import RestaurantsGrid from "./RestaurantsGrid";
function MainBody(){
    return(<div className="mainContainer">
            <CategoriesScrollView/>

            <h1> Available Restaurants</h1>
            <RestaurantsGrid/>
        </div>
    );
}

export default MainBody;