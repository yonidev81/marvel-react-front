import React, { useState, useEffect } from "react";
import axios from "axios";
import Cardcomic from "../components/Cardcomic";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // stockage des données
    const fetchData = async () => {
      console.log("1 ===>", "response.data");
      // requête axios pour récupérer data
      const response = await axios.get(
        `http://localhost:3000/comics?offset=${offset}`
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
      {/*   // Affichage des data via .map */}
      {data.data.results.map((comic, index) => {
        /*  console.log("comic ===>", comic); */

        return <Cardcomic key={index} data={comic} />;
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

export default Comics;
