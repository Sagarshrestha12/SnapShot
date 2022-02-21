import "./App.css";
import Header from "./component/Header";
import Search from "./component/Search";
import { useState, useEffect, useRef } from "react";
import Typebar from "./component/Typebar";
import ShowImage from "./component/ShowImage";

function App() {
  const [load, setLoad] = useState(false);
  const [imageType, changeImageType] = useState("Images");
  const [images, setImages] = useState([]);
  const [listimages, filterImage] = useState(images);
  let imageTypeArr = ["Mountain", "Birds", "Foods", "Beaches"];

  function changeImageList(type) {
    let imageType = imageTypeArr[type];
    changeImageType(imageType);
    filterImage(images.filter((img) => img.category_type === imageType));
  }

  function findImage(keyword) {
    let msg = keyword.charAt(0).toUpperCase() + keyword.slice(1);
    changeImageType(msg);
    let showImg = images.filter((img) => img.keyword === keyword);
    filterImage(showImg);
    if (showImg.length === 0) {
      changeImageType("Image Not Found");
    }
  }

  async function loadImage(loc) {
    return await fetch(loc)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json.photos.photo;
      });
  }

  useEffect(() => {
    let locationArr = [
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=[mountain]&per_page=24&format=json&nojsoncallback=1",
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=[foods]&per_page=24&format=json&nojsoncallback=1",
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=[birds]&per_page=24&format=json&nojsoncallback=1",
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=[beaches]&per_page=24&format=json&nojsoncallback=1",
    ];

    Promise.all(locationArr.map(loadImage)).then((photos) => {
      let allImages = [];
      for (let i = 0; i < photos.length; i++) {
        allImages.push(...photos[i]);
      }
      setImages(allImages);
      filterImage(allImages);
      setLoad(true);
    });
  }, []);

  if (!load) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Header />
      <Search findImage={findImage} />
      <Typebar imageTypeArr={imageTypeArr} changeImageList={changeImageList} />
      <ShowImage type={imageType} images={listimages} />
    </div>
  );
}

export default App;
