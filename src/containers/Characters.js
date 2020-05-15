import React, { useState, useEffect } from "react";
import CardCharacter from "../components/CardCharacter";
import axios from "axios";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [offset, setOffset] = useState(0);
  /*   const [offset, setOffset] = useState(0); */

  useEffect(() => {
    // stockage des données
    const fetchData = async () => {
      console.log("1 ===>", "response.data");
      // requête axios pour récupérer data
      const response = await axios.get(
        `http://localhost:3000/characters?offset=${offset}`
      );
      setData(response.data);
      setIsloading(false);
    };

    fetchData();
  }, [offset]);

  return isLoading ? (
    <span> Downloading ...</span>
  ) : (
    <div className="datadisplay">
      {data.data.results.map((character, index) => {
        console.log("character===>", character);
        return <CardCharacter data={character} />;
      })}

      <div className="pager">
        <button
          className="previous"
          onClick={() => {
            setOffset(offset - 20);
          }}
        >
          Previous
        </button>
        <button
          className="next"
          onClick={() => {
            setOffset(offset + 20);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
