import React from "react";
import { useHistory } from "react-router-dom";

const CardCharacter = ({ data }) => {
  const history = useHistory("/");
  /* console.log("data ===>", data.thumbnail.extension); */

  const url = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <maincharacter>
      <div
        onClick={() => {
          history.push("/comics/characterId");
        }}
      >
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
