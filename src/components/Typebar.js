import Type from "./Type";
import "../assets/css/Typebar.css";

function TypeBar({ imageTypeArr}) {
  return (
    <div className="typebar clearfix">
      {imageTypeArr.map((ele, index) => (
        <Type
          key={index}
          name={ele}
          type={index}
        />
      ))}
    </div>
  );
}
export default TypeBar;
