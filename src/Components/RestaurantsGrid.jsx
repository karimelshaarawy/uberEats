import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import LoadingSkeleton from "./LoadingSkeleton";


const baseUrl = 'http://localhost:4000/'


export default function RestaurantsGrid() {
    const [restaurants,setRestaurants]=useState([]);
    const [loading,setLoading]= useState(true);
    let navigate = useNavigate();

    function goToDetailsPage(item){
        console.log(item.id);
        navigate(`/Restaurants/${item.id}`,{state:{
            restaurant:item

            }});
    }

    useEffect(()=>{
        axios.get(baseUrl).then((response)=>{
        setRestaurants(response.data);
        setLoading(false)
        });

    },[])
    return (<div>{
    (loading? <LoadingSkeleton cols={4}/>:

        <ImageList sx={{ width: "100%" }} cols={4} gap={10} >
            {restaurants.map((item) => (
                <ImageListItem key={item.imgUrl} className ="list-item"  onClick={()=>{goToDetailsPage(item)}}>
                    <img
                        srcSet={`${item.imgUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.imgUrl}?w=248&fit=crop&auto=format`}
                        alt={item.name}
                        loading="lazy"
                        style={{borderRadius:"25px",height:"150px"}}
                    />
                    <ImageListItemBar
                        title={item.name}
                        subtitle={<span>In: {item.city},{item.country}  Rating: {item.rating}</span>}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )}</div>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
];