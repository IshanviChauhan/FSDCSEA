import React, {useState} from "react";
import cat from './assets/Cat.jpeg'

function ImageManipulation() {
    const [height,setHeight] = useState(150);
    const [width,setWidth] = useState(150);
    const [rotateAngle,setRotateAngle] = useState(0);
    const [r,setRed] = useState(0);
    const [g,setGreen] = useState(0);
    const [b,setBlue] = useState(0);

    function enhanceHeight(){
        setHeight(height+10);
    }
    function enhanceWidth(){
        setWidth(width+10);
    }
    function rotate(){
        setRotateAngle(rotateAngle+10);
    }
    function bgColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }

    const buttonStyle = {
        padding:'10px',
        borderRadius:'5px',
        width:'200px',
      };

    return (
        <div style = {{height:'500px', width:'400px',border:'2px solid black', margin:'100px 500px'}}>
            <div style = {{display:'flex', justifyContent:'center', padding:'50px', backgroundColor:`RGB(${r},${g},${b})`}}>
                <img src={cat} height={height} width={width} style={{borderRadius:'50%', transform:`rotate(${rotateAngle}deg)`}} alt=""/>
            </div>
            <div style = {{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly',marginTop:'30px'}}>
                <button onClick={enhanceHeight} style={buttonStyle}>EnhanceHeight</button>
                <button onClick={enhanceWidth} style={buttonStyle}>EnhanceWidth</button>
                <button onClick={rotate} style={buttonStyle}>Rotate</button>
                <button onClick={bgColor} style={buttonStyle}>BackgroundColor</button>
            </div>
        </div>
    )
}

export default ImageManipulation