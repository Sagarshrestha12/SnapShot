import Type from "./Type";
import "./Typebar.css";

function TypeBar({ imageTypeArr, changeImageList }) {
  
  return (
    <div className="typebar clearfix">
      {imageTypeArr.map((ele, index) => (
        <Type
          key={index}
          name={ele}
          type={index}
          changeImageList={changeImageList}
        />
      ))}
    </div>
  );
}
export default TypeBar;
