
// ColorPicker.jsx

import {useState} from "react";
import " ./styles.css"
 
export default function ColorPicker(){
    const [selectedColor, setSelectedColor] = useState({hex:null, name:null});
    const [focusedIndex, setFocusedIndex] = useState(null);
    const [hoveredColor, setHoveredColor] = useState(null);
    const colors = [
        {name: "Red", hex: "#FF0000"},
        {name: "Green", hex: "00FF00"},
        {name: "Blue", hex: "0000FF"},
        {name: "Yellow", hex: "FFFF00"},
        {name: "Cyan", hex: "00FFFF"},
        {name: "Magenta", hex: "FF00FF"}
        
    ];

    function handleColorSelect(color){
        setSelectedColor({hex:color.hex, name:color.name});
        setHoveredColor(null);

    }
    function handleMouseEnter(hex){
        setHoveredColor(hex);
    }
function handleMouseLeave(){
    console.log("Mouse left color");
    setHoveredColor(null);
}
function handleFocus(index){
    setFocusedIndex(index);
    setHoveredColor(colors[index].hex);
}
function handleBlur(){
    setFocusedIndex(index);
    setHoveredColor(null);

}
function handleKeyDown(e ,index){
    if(e.key === "ArrowRight"){
        setFocusedIndex((prevIndex) => (prevIndex === null||prevIndex === colors.length - 1?
            0 : prevIndex + 1));
    }else if (e.key === "ArrowLeft"){
        setFocusedIndex ((prevIndex) => (prevIndex === null || prevIndex === 0 ?colors.length - 1: prevIndex - 1));
    }else if (e.key === " Enter"&&focusedIndex !== null){
        setSelectedColor({hex: colors [focusedIndex].hex, name: colors[focusedIndex].name});
    }
}return (

<div className="color-picker">
<h1>Color Picker</h1>
<div className="color-list">
{colors.map((color, index) => (
<div key={index} className= {`color-item ${ focusedIndex === index ? "focused" : ""}`} style={{ backgroundColor:color.hex }} onClick={() =>handleClick(color)}>
onMouseEnter={() =>handleMouseEnter(color.hex)}
onMouseLeave={handleMouseLeave}
onFocus={() =>handleFocus(index)}
onBlur={handleBlur}
onKeyDown={(e) =>handleKeyDown(e, index)}
tabIndex={0}

{hoveredColor === color.hex ? (
<span className="color-code">{color.hex}</span>
    ) : selectedColor.hex === color.hex ? (
<span className="color-code">{selectedColor.name}</span>
) : null}
</div>

    ))

}
</div>
</div>
)
}

 




