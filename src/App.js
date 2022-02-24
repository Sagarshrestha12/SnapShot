import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Typebar from "./components/Typebar";
import ShowImage from "./components/ShowImage";
import loadingImage from "./assets/images/load.gif";
import React, { useContext } from "react";
import uploadContext from "./context-api/upload-context";

function App() {
  const ctx = useContext(uploadContext);
  
  if (!ctx.load) {
    return <img className="loading" src={loadingImage} alt="loading"></img>;
  }

  return (
    <div>
      <Header />
      <Search findImage={ctx.findImage} />{" "}
      <Typebar imageTypeArr={ctx.imageTypeArr} />
      {ctx.loading && <h1> Loading... </h1>}
      {!ctx.loading && (
        <ShowImage type={ctx.imageType} images={ctx.listimages} />
      )}
    </div>
  );
}

export default App;
