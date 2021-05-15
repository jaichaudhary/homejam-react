import React from "react";
import userReview from "./userReview.js";
import "./Review.css";
import "./Row.css";

function Review({ title }) {
  return (
    <div>
      <div className="title_heading">
        <h2 className="row_title">{title}</h2>
        <p>
          1<span className="subtle_color">/12 </span>
          <img
            src="./Icons/leftArrow.svg"
            className="navigate_Icon"
            alt="Left Arrow"
          ></img>
          <img
            src="./Icons/rightArrowWhite.svg"
            className="navigate_Icon"
            alt="Right Arrow"
          ></img>
        </p>
      </div>
      <div className="row">
        {userReview.map((req) => {
          // console.log(req.image);
          return (
            <div className="row_review">
              <div className="for_flex">
                <img
                  className="profileImage"
                  src={req.profileImage}
                  alt={req.name}
                ></img>

                <div className="right">
                  <p className="name_para">{req.name}</p>
                  <div className="region">
                    <img
                      className="flag"
                      src={req.flag}
                      alt="Country Flag"
                    ></img>
                    <p className="city">{req.city}</p>
                  </div>
                </div>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                in donec in nisi vitae. Vestibulum pellentesque eget laoreet
                adipiscing.{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Review;
