import React from "react";
function Button (){
    const handleClick = () => {
        alert('CR7 < MESSI > NEYMAR');
      };
    
      return (
        <button onClick={handleClick}>DA UMA CLICADA</button>
      );
};
export default Button;