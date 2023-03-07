import "./App.css";
import Imagecarousel from "./Componets/Imagecarousel";
import image1 from "./7.png"
import image2 from "./8.png"
import image3 from "./9.png"
import image4 from "./10.png"
import image5 from "./11.png"

function App() {
  const images = [
  
   image1,image2,image3,image4,image5
  ];
  return (
    <div className="App">
      <Imagecarousel images={images} />
    </div>
  );
}

export default App;