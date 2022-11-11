import React from "react";


export default function ColorBlock(props){

    const redValue = props.value[0]
    const greenValue = props.value[1]
    const blueValue = props.value[2]
    const rgbValueText = `(${redValue}, ${greenValue}, ${blueValue})`
 let text = ""

  if(redValue < 123 || greenValue < 123 || blueValue < 123){
      text = "white"
  }else{
      text = "black"
  }


const styles ={
    backgroundColor:`rgb(${redValue}, ${greenValue}, ${blueValue})`,
}
const colorValueText = {
    color: text

}
    return(
        <div style={styles} className="color-block">
            <h2 className="color-value-text" style={colorValueText}>{rgbValueText}</h2>
        </div>
    )
}