import React, { useState } from "react";

const TestForm = (props) => {

  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log(text);
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase!", "success");

  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase!", "success");

  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to Clipboard!", "primary");
    document.getSelection().removeAllRanges();
  }
  const handleClearClick = () => {
    setText('');
    props.showAlert("Textarea cleared!", "primary");

  }


  const [text, setText] = useState("");

  return (
    <>
      <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="container mt-5 my-4">
          <div>
            <h1>{props.heading}</h1>
            <textarea className="form-control" name="mybox" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-success my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-warning my-3 mx-2 text-light " onClick={handleCopyClick}>Copy to Clipboard</button>
            <button disabled={text.length===0} className="btn btn-danger my-3 mx-2" onClick={handleClearClick}>Clear</button>
          </div>
        </div>
        <div className="container my-3 pb-5">
          <h2>Your text summary</h2> 
          <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words, {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0 ? text:"Nothing to preview"}</p>
        </div>
      </div>
    </>
  );
};

export default TestForm;
