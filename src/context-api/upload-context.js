import React, { useState, useEffect } from "react";

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
    return `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=[${tagName}]&per_page=24&format=json&nojsoncallback=1`;
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
