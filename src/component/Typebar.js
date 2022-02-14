import Type from "./Type";
import "./Typebar.css";

function TypeBar({ imageTypeArr }) {

  return (
    <div className="typebar">
      {imageTypeArr.map((ele, index) => (
        <Type key={index} name={ele} />
      ))}
    </div>
  );
}
export default TypeBar;
