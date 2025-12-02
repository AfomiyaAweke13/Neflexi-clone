import React from "react";
import Row from "./Rowlist/Rowlist";        // <-- import your Row component
import requests from "../../Utilits/request";   // <-- import TMDB requests
import './Rows.css'
function Rows() {
  return (
    <div className="rows_container">
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow
      />

      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTrending} 
      />

      <Row 
        title="Top Rated" 
        fetchUrl={requests.fetchTopRated} 
      />

      <Row 
        title="Action Movies" 
        fetchUrl={requests.fetchActionMovies} 
      />
    </div>
  );
}

export default Rows;
