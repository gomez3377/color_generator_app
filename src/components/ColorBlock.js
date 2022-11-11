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
const lockedStatus = props.isLocked ? 
<i  style={colorValueText} class="fa-solid fa-lock"></i> : 
<i  style={colorValueText} class="fa-solid fa-lock-open"></i>


    return(
        <div style={styles} className="color-block">
            <div className="color-block-options">
            <button onClick={props.deleteColor} className="color-block-button"><i style={colorValueText} class="fa-solid fa-x"></i></button>
            <button onClick={props.lockColor} className="color-block-button">{lockedStatus}</button>
            </div>
            <h2 className="color-value-text" style={colorValueText}>{rgbValueText}</h2>
        </div>
    )
}