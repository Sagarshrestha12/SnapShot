import "./ShowImage.css";
import imageNotFound from "../images/image-not-found.png";
function ShowImage({ type, images }) {
  let showImage = images.map((img) => (
    <img
      className="image-list"
      key={img.id}
      src={img.image}
      alt={img.keyword}
    ></img>
  ));
  
  if (images.length === 0) {
    return (
      <div className="show-image">
        {<img src={imageNotFound} alt="image_not_found"></img>}
        <h3>{type}</h3>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="show-search-image">
        <h2>{type}</h2>
        {showImage}
      </div>
    );
  }

  return (
    <div className="show-image">
      <h2>{type}</h2>
      {showImage}
    </div>
  );
}

export default ShowImage;
