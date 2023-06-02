import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({data}) => {

  return (
    <div className="card">
      {data.show && (
        <>
          <div className="c-left">
            <img
              src={data.show.image.medium}
              alt=""
              className="c-img"
            />
          </div>
          <div className="c-right">
            <div className="c-heading">{data.show.name} </div>
            <ol className="c-ol">
              <li>Type : {data.show.type} </li>
              <li>Language : {data.show.language}</li>
              <li>Genres : {data.show.genres.map((i)=> ([i,", "]))}</li>
              <li>Status : {data.show.status}</li>
              {data.show.officialSite ? 
              <li>Official-site : <a href={data.show.officialSite} style={{textDecoration:"none", color:"white"}}>{data.show.officialSite}</a></li>
              : <li>Official-site : Not available....Please refer to owner</li>}
              <li>
                Rating :<span className="star"> ★ {data.show.rating.average}</span>
              </li>
            </ol>
            <Link to={`/show/${data.show.id}`}>
            <button className="c-button" >View Details</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
