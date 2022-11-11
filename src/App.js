import React from "react";
import AddColorButton from "./components/AddColorButton";
import ColorBlock from "./components/ColorBlock";
import Header from "./components/Header";

function App() {
  const [colors, setColors] = React.useState(generateColors());

  function generateColors() {
    const colorArray = [];
    for (let i = 0; i < 6; i++) {
      colorArray.push(generateColorObject())
    }
    return colorArray
  }
  function generateColorObject() {
    const colorObject = {
        isLocked: false,
        colorValue:generateRgbaValues()
    }
    return colorObject
  }

  // function generateHexValues(){
  //   const hexValueArray = [];
  //   for (let i = 0; i < 3; i++) {
  //     hexValueArray.push(rgbValues[i].toString(16))
  //   }
  //   return hexValueArray;
  // }

  function generateRgbaValues() {
    const rgbValues = [];

    for (let j = 0; j < 3; j++) {
      rgbValues.push(Math.ceil(Math.random() * 255));
    }
    return rgbValues;
  }

  function generateNewColors() {
    setColors(prevColors => prevColors.map(color => {
      return generateColorObject()
    }))
  }
    


  const displayColors = colors.map(color => <ColorBlock value={color.colorValue} />)



  function addColorBlock(){
    const colorBlockLimit = 10
    if(colors.length < colorBlockLimit){
      setColors(prevColors => [
        ...prevColors, 
       generateColorObject()
      ])
    }
  }
  function lockColor(){

  }
  
  return (
    <div className="App">
      <Header />
      <section className="color-block-container">
        {displayColors}
        <AddColorButton addColor={addColorBlock} />
      </section>
      <button onClick={generateNewColors}>Generate Colors</button>
    </div>
  );
}

export default App;
