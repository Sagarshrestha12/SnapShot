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
  let imageTypeArr = ["Mountain", "beaches", "Birds"];

  return (
    <div>
      <Header />
      <Search />
      <Typebar imageTypeArr={imageTypeArr} />
      <ShowImage type={currentImageType} images={listimages} />
    </div>
  );
}

export default App;
