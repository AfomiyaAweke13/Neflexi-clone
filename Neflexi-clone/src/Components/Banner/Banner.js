import React, { useEffect, useState } from 'react';
import axios from '../../Utilits/axios';
import requests from '../../Utilits/request';
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);

        const results = response.data.results;

        setMovie(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []); // dependency array FIXED
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

  return (
<div 
  className="banner"
  style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }}
>
    <div className="banner__contents">
        <h1 className="banner__title">
            {movie?.name || movie?.title || movie?.original_name}
        </h1>

        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
        </h1>
    </div>

    <div className="banner--fadeBottom" />
</div>

  );
}

export default Banner;
