import React, { useState } from "react";
import './button.css';



const Button =(props)=>{
    return(
    <>
        <button type="submit" class="btn btn-primary" onClick={props.fun}>{props.text}</button>
   

    </>
)
}
export default Button;

