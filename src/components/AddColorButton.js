import React from "react";

export default function AddColorButton(props){
    return(
        <button className="add-color-button" onClick={props.addColor}>
            <i class="fa-solid fa-plus"></i>
        </button>
    )
}