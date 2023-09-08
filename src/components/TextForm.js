import React ,{useState} from 'react'


export default function TextForm(props) {
  const handleUPClick=()=>{
       // console.log("Uppar case click");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("convert to uppercase","success");

  }
  const handleClear=()=>{
    // console.log("Uppar case click");
     
     setText('')

}
  const handleDownClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("convert to lower case","success");
  }
  const handleOnChange=(event)=>{
   // console.log("onchange");
    setText(event.target.value);
     }
  const [text,setText]=useState("");
  const handleCopy=()=>{
    let Text=document.getElementById('mybox')
             navigator.clipboard.writeText(Text.value)
  }
  const handleSpace=()=>{
    let ntext=text.split(/[ ]+/);
    setText(ntext.join(' '))

  }
  return (
    
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#153e7a'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} 
        style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black',
                coolor:props.mode==='dark'?'white':'#153e7a'}}  
        rows="8"></textarea>
      </div>
      
    <button className="btn btn-primary mx-3" onClick={handleUPClick} > convert to uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleDownClick} >convert to to lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClear} >clear text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>copyText</button>
    <button className="btn btn-primary mx-1" onClick={handleSpace}>remove Extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#153e7a'}}>
      <h1>your text summary</h1> r
      <p> {text.split(" ").length}words and {text.length}characters</p>
      <p>{0.008*text.split("").length} minutes to read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter Something in the text above to preview here"}</p>
  
    </div>
  

</>
  )
}
