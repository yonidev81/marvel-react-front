import React, { useState, useEffect } from "react";
import axios from "axios";
import Cardcomic from "../components/Cardcomic";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    // stockage des données
    const fetchData = async () => {
      console.log("1 ===>", "response.data");
      // requête axios pour récupérer data
      const response = await axios.get("http://localhost:3000/comics");
      setData(response.data);
      setIsloading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span> Downloading ...</span>
  ) : (
    <div className="datadisplay">
      {/*   // Affichage des data via .map */}
      {data.data.results.map((comic, index) => {
        /*  console.log("comic ===>", comic); */

        return <Cardcomic data={comic} />;
      })}
    </div>
  );
};

export default Comics;
