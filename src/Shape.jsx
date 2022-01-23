import React,{useState} from 'react';


const Shape=()=>{

    const [shape,setShape]=useState("triangle");
    const [color,setColor]=useState("cyan");
    const setCircle=()=>{
        setShape("circle");
    }
    const setTriangle=()=>{
        setShape("triangle");
    }
    const setSquare=()=>{
        setShape("square");
    }
    const shapeStyle={
        width:"100px",
        height:"100px",
        borderRadius:"0px",
        backgroundColor:""+color,
        borderLeft:"0px",
        borderRight:"0px",
        borderBottom:"0px",
    };
    if(shape=="circle")
    {
        shapeStyle.borderRadius="50%";  
    }
    else if(shape=="triangle")
    {   
        shapeStyle.backgroundColor="transparent";
        shapeStyle.width="0px";
        shapeStyle.height="0px";
        shapeStyle.borderLeft="50px solid transparent";
        shapeStyle.borderRight="50px solid transparent";  
        shapeStyle.borderBottom="100px solid "+color;
    }

    const colorRed=()=>{
        setColor("red");
    };
    const colorBlue=()=>{
        setColor("cyan");
    };
    const colorGreen=()=>{
        setColor("lime");
    };

    return (
        <>
        <div className="shapArea"> 
        <div style={shapeStyle} className="move-around"></div>
        </div>

        <div className="options">
            <p>Shape of object</p>
            <button className="btn" onClick={setCircle}>Circle</button>
            <button className="btn" onClick={setSquare}>Square</button>
            <button className="btn" onClick={setTriangle}>Triangle</button>
        </div>
        <div className="colors">
        <p>Color of Object</p>
            <button className="btn" onClick={colorRed}>Red</button>
            <button className="btn" onClick={colorBlue}>Blue</button>
            <button className="btn" onClick={colorGreen}>Green</button>
        </div>
        </>
    );
}

export default Shape ; 