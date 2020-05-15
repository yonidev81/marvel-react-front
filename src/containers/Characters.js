import React, { useState, useEffect } from "react";
import CardCharacter from "../components/CardCharacter";
import axios from "axios";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  /*   const [offset, setOffset] = useState(0); */

  useEffect(() => {
    // stockage des données
    const fetchData = async () => {
      console.log("1 ===>", "response.data");
      // requête axios pour récupérer data
      const response = await axios.get("http://localhost:3000/characters");
      setData(response.data);
      setIsloading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span> Downloading ...</span>
  ) : (
    <div className="datadisplay">
      {data.data.results.map((character, index) => {
        console.log("character===>", character);
        return <CardCharacter data={character} />;
      })}
    </div>
  );
};

export default Characters;
