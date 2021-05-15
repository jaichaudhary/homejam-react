import React from "react";
import request from "./request.js";
import "./Row.css";

function Row({ title }) {
  return (
    <div className="top">
      <div className="title_heading">
        <h2 className="row_title">{title}</h2>
        <p className="row_viewAll">View All</p>
      </div>
      <div className="row">
        {request.map((req) => {
          // console.log(req.image);
          return (
            <div className="row_gradientShadow">
              <div className="row_img">
                <img src={req.image} alt={req.name}></img>
                <div className="genre">{req.genre}</div>
                <p className="name">{req.name}</p>
                <div className="more_flex">
                  <p className="more">
                    More Info
                    <img
                      src="./Icons/rightArrow.svg"
                      className="more_Icon"
                      alt="Right Arrow"
                    ></img>
                  </p>
                  <img
                    src="./Icons/bookmark.svg"
                    className="bookmark"
                    alt="Bookmark"
                  ></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
