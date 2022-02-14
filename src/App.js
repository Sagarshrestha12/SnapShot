import images from "./image.js";
import "./App.css";
import Header from "./component/Header";
import Search from "./component/Search";
import { useState } from "react";
import Typebar from "./component/Typebar";
import ShowImage from "./component/ShowImage";

let currentImageType = 5; //5 indicating all types of images

function App() {
  const [listimages, filterImage] = useState(images);
  const [imageType, changeImageType] = useState("Images");
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
