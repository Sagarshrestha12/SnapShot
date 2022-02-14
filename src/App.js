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
  let imageTypeArr = ["Mountain", "Birds"];

  function changeImageList(type) {
    let imageType = imageTypeArr[type];
    filterImage(images.filter((img) => img.category_type === imageType));
  }

  return (
    <div>
      <Header />
      <Search />
      <Typebar imageTypeArr={imageTypeArr} changeImageList={changeImageList} />
      <ShowImage type={imageType} images={listimages} />
    </div>
  );
}

export default App;
