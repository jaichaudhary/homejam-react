import React from "react";
import "./Banner.css";
import "./Row.css";

function Banner() {
  return (
    <header>
      <div className="overlay">
        <div className="text">
          <h1 className="text_title">Cari Cari</h1>
          <p className="text_description">
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </p>
        </div>

        {/*better approach is to use objects here*/}

        {/*<div className="social">
          <div className="outer_div"><div classname="row_social">
            <img src="./BannerIcon/heartIcon.svg"></img>
            <p>0</p>
            <p>Label</p>
          </div></div>

          <div classname="row_social">
            <img src="./BannerIcon/padIcon.svg"></img>
            <p>0</p>
            <p>Label</p>
          </div>

          <div classname="row_social">
            <img src="./BannerIcon/padIcon.svg"></img>
            <p>0</p>
            <p>Label</p>
          </div>

          <div classname="row_social">
            <img src="./BannerIcon/padIcon.svg"></img>
            <p>0</p>
            <p>Label</p>
          </div>
        </div>*/}

        {/*better approach is to objects here*/}
      </div>
    </header>
  );
}

export default Banner;
