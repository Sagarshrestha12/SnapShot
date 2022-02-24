import { useContext } from "react";
import "../assets/css//Type.css";
import uploadContext from "../context-api/upload-context";

function Type({ name, type }) {
  const ctx = useContext(uploadContext);

  function handleImageType() {
    ctx.changeImageList(type);
  }

  return (
    <button className="type-button" onClick={handleImageType}>
      {name}
    </button>
  );
}
export default Type;
