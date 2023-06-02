import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchImages = ({ addImages }) => {
  const [searchTerm, setSearchTerm] = useState("car");

  useEffect(() => {
    getImages();
  }, []);

  function getImages() {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: "vHYCeGAL6awdc2uONSlfjTdpCVAJlZpEVfoE_tBLoCQ",
          query: searchTerm,
        },
      })
      .then((response) => addImages(response.data.results))
      .catch((error) => console.log(error));
  }
  function reset() {
    setSearchTerm("");
    addImages([]);
  }

  return (
    <div className="main">
      <input
        type="text"
        placeholder="Search Images"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <div className="btn">
        <button className="search" onClick={getImages}>
          Search
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default SearchImages;
