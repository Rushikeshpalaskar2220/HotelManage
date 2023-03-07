import "./App.css";
import Imagecarousel from "./Componets/Imagecarousel";
import image1 from "../public/images/7.png"
import image2 from "../public/images/8.png"

function App() {
  const images = [
  
   image1,image2
  ];
  return (
    <div className="App">
      <Imagecarousel images={images} />
    </div>
  );
}

export default App;