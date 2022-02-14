import "./Type.css";

function Type({ name, type, changeImageList }) {
  function handleImageType() {
    changeImageList(type);
  }

  return (
    <button className="type-button" onClick={handleImageType}>
      {name}
    </button>
  );
}
export default Type;
