import React, { useState } from "react";

export default function TextForm(props) {


  const handleUpClick = () => {
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success");
  };
  const handlelowerClick = () => {
    let newText=text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("converted to lower case","success");
  };

  const handleClearText=()=>{
      let newText='';
      setText(newText)
      props.showAlert("Cleared","success");
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleCopy=()=>{
      console.log("im copy");
      var text =document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to clipboard","success");

  }
const handleExtraSpaces=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces","success");
}

  const [text, setText] = useState(" ");

  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  id="myBox" onChange={handleOnchange}  style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}  value={text}  rows="8" ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uperase </button>
      <button className="btn btn-primary mx-1" onClick={handlelowerClick}>Convert to lowercase </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>copy </button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>clear </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>remove spaces </button>


    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 mod>Your text Summry</h1>
        <p> {text.split(" ").length}  words and {text.length} charecter</p>
        <p>{0.008* text.split("").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>

    </div>
    </>
  );
}
