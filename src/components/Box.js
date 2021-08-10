import React from 'react'
import Hello from './Hello';
const Box = ({onClick}) => {
    var i =0;
    return (
        <div>
            <Hello value="Hello"></Hello>
            <button type="button" onClick = {() => {
                i = i+1;
                console.log(i)
                var x = document.getElementById("H")
                x.textContent = i
                if(x.style.color == 'red'){
                    x.style.color = 'blue'
                }else{
                    x.style.color = 'red'
                }
            }}>
            Click
            </button>
            <h2 id = "H"></h2>
        </div>
    )
}

export default Box
