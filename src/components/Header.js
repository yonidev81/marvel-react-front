import React from "react";
import Logo from "../assets/logomarvel.png";
import {
  Link
} from "react-router-dom";

const Header = () => {
  return ( <
    >
    <
    div className = "header" >
    <
    div className = "logo" >
    <
    img src = {
      Logo
    }
    alt = "Logo Marvel" / >
    <
    div className = "subheader" >
    <
    div className = "menu" >
    <
    a href = "https://developer.marvel.com/"
    target = "_blank"
    rel = "noopener noreferrer" > {
      " "
    }
    Developers {
      " "
    } <
    /a>

    <
    Link className = "chara"
    to = "/characters" > {
      " "
    }
    Characters {
      " "
    } <
    /Link> <
    Link to = "/comics" > Comics < /Link> <
    Link to = "/favorites" > Favorites < /Link> <
    /div> <
    /div> <
    /div> <
    /div> <
    />
  );
};

export default Header;