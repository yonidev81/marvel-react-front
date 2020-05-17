//Imports

import React, {
  useState,
  useEffect
} from "react";
import {
  useParams
} from "react-router-dom";
import axios from "axios";
import Cardcomic from "../components/Cardcomic";

// Déclaration de fonctions
const Comicbycharacter = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const params = useParams()
  const id = params.characterId;
  // Uitlisation de params


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/comics/${id}`);
      console.log("2 ====>", response.data);
      setData(response.data);
      setIsloading(false);
    };
    fetchData();
  }, [id]);



  return isLoading ?

    ( < span > Downloading... < /span>) : ( <
      div > {
        data && data.data.results.map((comic, index) => {
          /*  console.log("comic ===>", comic); */

          return <Cardcomic key = {
            index
          }
          data = {
            comic
          }
          />
        })
      } < /div>
    )
}

export default Comicbycharacter;