import data from "./image.json";
import "./App.css";
import Header from "./component/Header";
import Search from "./component/Search";

function App() {
  console.log(data.images);
  return (
    <div>
      <Header />
      <Search />
    </div>
  );
}

export default App;
