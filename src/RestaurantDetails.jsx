import React, {useEffect, useState} from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./Components/Css/details.css";
import RestaurantImagesList from "./Components/RestaurantImagesList";
import Rating from '@mui/material/Rating';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import LoadingSkeleton from "./Components/LoadingSkeleton";

const baseUrl = 'http://localhost:4000/'


export default function RestaurantDetails(){
    const {id}= useParams();
    const {state} = useLocation()
    const restaurant = state.restaurant;
    const [photos,setPhotos] =useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        axios.post(baseUrl+"restaurant",{
            restaurantId:id
        }).then((response)=>{
            setPhotos(response.data);
            setLoading(false);
        });

    },[]);

    return(
        <div>
            <NavBar/>
            <img className="wide-image" src={restaurant.imgUrl} alt="Main restaurant"/>
            <div className="main-container">
                <h1 className="title"> {restaurant.name}</h1>
                <p className="subtitle">{restaurant.city},{restaurant.country}</p>
                <Rating name="read-only" value={restaurant.rating/2} readOnly precision={0.5}/>
                {/*<p className="subtitle">9.8 <StarIcon fontSize="small"/></p>*/}
                <div className="div-right">
                    {loading? <LoadingSkeleton cols={3}/>:<RestaurantImagesList photos={photos}/>}
                </div>
            </div>
            <Footer/>
        </div>
    )
}