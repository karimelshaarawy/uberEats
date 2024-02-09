
import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import 'font-awesome/css/font-awesome.min.css'; //import in react app
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'




import './Css/nav.css'
import {useNavigate} from "react-router-dom";
function NavBar(){
    const navigate = useNavigate();
    return(<div className="spacer">
            <AppBar position="fixed"  elevation={0}  >
                <Toolbar className="app-bar">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon className="menu-icon" fontSize="Large"/>
                    </IconButton>
                    <img src={require("./Css/uber.png")} alt="uber eats" className="clickable" onClick={()=>{navigate('/')}}/>
                    <div className="searchBar" >
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{display:"inline",fontSize:"15px",color:"black"}}/>
                    <input placeholder="Food, groceries, drinks, etc"/></div>
                    <button>
                        Sign In
                    </button>
                </Toolbar>

            </AppBar>
        </div>
    );

}

export default NavBar;