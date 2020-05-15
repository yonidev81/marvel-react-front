import React from "react";

const CardCharacter = ({ data }) => {
  /* console.log("data ===>", data.thumbnail.extension); */

  const url = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <maincharacter>
      <div>
        <div className="cardcharacter">
          <img alt="characters" src={url} />
        </div>
        <div className="charcontent">
          <div className="name"> {data.name}</div>
          <div className="description"> {data.description}</div>
        </div>
      </div>
    </maincharacter>
  );
};

export default CardCharacter;
