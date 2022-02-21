import "./ShowImage.css";
import imageNotFound from "../images/image-not-found.png";
import React from "react";

function ShowImage({ type, images }) {
  let showImage = images.map((ele) => {
    let loc = `https://farm${ele.farm}.staticflickr.com/${ele.server}/${ele.id}_${ele.secret}_m.jpg`;
    return <img className="image-list" src={loc} alt="new" key={ele.id}></img>;
  });

  if (!images.length) {
    return (
      <>
        <div className="show-image">
          <img src={imageNotFound} alt="image_not_found"></img>
        </div>
        <h2>{type}</h2>
      </>
    );
  }

  if (images.length === 1) {
    return (
      <>
        <h2>{type}</h2>
        <div className="show-image">{showImage}</div>
      </>
    );
  }

  return (
    <>
      <h2>{type}</h2>
      <div className="show-image">{showImage}</div>
    </>
  );
}

export default ShowImage;
