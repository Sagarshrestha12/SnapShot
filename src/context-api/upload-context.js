import React, { useState, useEffect } from "react";
import Link from "../apis/updateLink";

const uploadContext = React.createContext({
  load: false,
  imageTypeArr: ["Mountain", "Birds", "Foods", "Beaches"],
  changeImageList: () => {},
  loading: false,
  imageType: "Images",
  listimages: [],
  findImage: () => {},
});

export const UploadContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [imageType, changeImageType] = useState("Images");
  const [images, setImages] = useState([]);
  const [listimages, filterImage] = useState(images);
  let imageTypeArr = ["Mountain", "Birds", "Foods", "Beaches"];

  useEffect(() => {
    let imgTag = document.querySelectorAll[".image-list"];
    if (imgTag) {
      imgTag.forEach((element) => {
        element.style.filter = "blur(8px)";
        setTimeout(() => {
          element.style.filter = "blur(0px)";
        }, 1000);
      });
    }
  }, [listimages]);

  function changeImageList(type) {
    setLoading(true);
    let imageType = imageTypeArr[type];
    changeImageType(imageType);
    loadImage(locationOfImage(imageType)).then((photos) => {
      filterImage(photos);
      setLoading(false);
    });
  }

  function findImage(keyword) {
    setLoading(true);
    let msg = keyword.charAt(0).toUpperCase() + keyword.slice(1);
    changeImageType(msg);
    loadImage(locationOfImage(keyword)).then((photos) => {
      filterImage(photos);
      setLoading(false);
      if (!photos.length) {
        changeImageType("Image Not Found");
      }
    });
  }

  async function loadImage(loc) {
    return await fetch(loc)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error;
      })
      .then((json) => {
        return json.photos.photo;
      });
  }

  function locationOfImage(tagName) {
    return Link.returnLink(tagName);
  }

  useEffect(() => {
    let locationArr = [
      Link.returnLink("Mountain"),
      Link.returnLink("Foods"),
      Link.returnLink("Beaches"),
      Link.returnLink("Birds"),
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

  return (
    <uploadContext.Provider
      value={{
        load: load,
        imageTypeArr: ["Mountain", "Birds", "Foods", "Beaches"],
        changeImageList: changeImageList,
        loading: loading,
        imageType: imageType,
        listimages: listimages,
        findImage: findImage,
      }}
    >
      {props.children}
    </uploadContext.Provider>
  );
};
export default uploadContext;
