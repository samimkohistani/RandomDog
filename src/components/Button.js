import React from "react";


const Button = (props) => {

    const handleClickButton = () => {
      props.getnewurl();
    }
    return (
        <div className="buttonContainer">
          <button id="urlButton" onClick={handleClickButton}>Get Dog Picture</button>
        </div>
      )
    };

    
    
    export default Button;