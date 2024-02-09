import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RestaurantDetails from "./RestaurantDetails";
import "./Components/Css/fullSite.css"

function App() {
  return (<Router>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route index element={<Home />} />
              <Route path="Restaurants/:id" element={<RestaurantDetails />} />
          </Routes>
      </Router>
  );
}

export default App;
