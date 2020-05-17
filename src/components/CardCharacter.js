import React from "react";
import {
  Link
} from "react-router-dom";

const CardCharacter = ({
  data
}) => {

  /* console.log("data ===>", data.thumbnail.extension); */

  const url = data.thumbnail.path + "." + data.thumbnail.extension;

  return (

    <
    Link to = {
      `${data.id}/comics`
    } >
    <
    div className = "cardcharacter" >
    <
    img alt = "characters"
    src = {
      url
    }
    /> <
    /div> <
    div className = "charcontent" >
    <
    div className = "name" > {
      data.name
    } < /div> <
    div className = "description" > {
      data.description && data.description
    } < /div> <
    /div> <
    /Link>

  );
};

export default CardCharacter;