import "./ShowImage.css";

function ShowImage({ type, images }) {
    
  return (
    <div className="show-image">
      {images.map((img) => (
        <img
          className="image-list"
          key={img.id}
          src={img.image}
          alt={img.keyword}
        ></img>
      ))}
    </div>
  );
}

export default ShowImage;