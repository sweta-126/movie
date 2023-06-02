import React, { useState } from "react";
import "./Movie.css";
import Form from "./Form";

const Movie = ({movie}) => {

  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };
  console.log(movie)
  return (
    <div className="movie">
      {movie.data && 
      <>
      <div className="img-container">
      <img
          src={movie.data.image.original}
          alt=""
          className="m-img"
        />
      </div>
      <div className="m-container">
        <div className="m-name">{movie.data.name}</div>
        <div className="m-desc">
         {movie.data.summary}
        </div>
        <ol>
          <li>Type : {movie.data.type}</li>
          <li>Language : {movie.data.language}</li>
          <li>Genres : {movie.data.genres.map((i)=> ([i,", "]))}</li>
          <li>Status : {movie.data.status}</li>
          <li>Runtime : {movie.data.runtime} minutes</li>
          {movie.data.officialSite ? 
              <li>Official-site : <a href={movie.data.officialSite} style={{textDecoration:"none", color:"white"}}>{movie.data.officialSite}</a></li>
              : <li>Official-site : Not available....Please refer to owner</li>}
          <li>
            Rating :<span className="m-star"> ★ {movie.data.rating.average}</span>
          </li>
        </ol>
        <div className="time"></div>
        <button className="m-button" onClick={handleClick}>Book Now</button>
        {showComponent && <Form  data={movie.data.name}/>}
      </div></>}
    </div>
  );
};

export default Movie;
