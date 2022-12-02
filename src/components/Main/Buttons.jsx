import React from "react";
import { Button } from "react-bootstrap"

const Buttons = () => {
    return (
        <div className='buttons'>
          <Button id="inc">Инкремент</Button>
          <button id="dec">Декремент</button> 
          <button id="reset">Ресет</button> 
        </div>
    )
}

export default Buttons;