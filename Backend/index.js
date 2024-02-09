import express from 'express';
import bodyParser from "body-parser";
import axios from "axios";
import cors from 'cors';

const app =  express();
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
const port = 4000;

app.get("/",async (req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list',
        params: {
            queryPlaceValueCityId: '348156',
            pageSize: '30',
            pageNumber: '1'
        },
        headers: {
            'X-RapidAPI-Key': '8698d8b521msh0cbc8a42f71c334p1a86c2jsn14f0dcc9890e',
            'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.send(chooseWantedData(response.data.data))
    } catch (error) {
        console.error(error);
    }
});

app.post('/restaurant',async (req,res)=>{
    const body = req.body;
    const id = body.restaurantId;

    const options = {
        method: 'GET',
        url: 'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/get-info',
        params: {
            restaurantId: String(id)
        },
        headers: {
            'X-RapidAPI-Key': '8698d8b521msh0cbc8a42f71c334p1a86c2jsn14f0dcc9890e',
            'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
        }
    };

    try {

        const response = await axios.request(options);
        res.send(JSON.stringify(response.data.data.restaurant.photos))
        } catch (error) {
        console.error(error);
    }
})

function chooseWantedData(data){
    var result =[];
    for (const restaurant of data) {
        var item = {
            name: restaurant.name,
            country: restaurant.address.country,
            city: restaurant.address.locality,
            rating: restaurant.aggregateRatings.thefork.ratingValue,
            imgUrl: restaurant.mainPhotoSrc,
            id: restaurant.id
        }
        result.push(item);
    }
    return JSON.stringify(result);
}

app.listen(port,()=>{
    console.log("app is listening on port",port);
})

