import React from 'react';

import { useState } from 'react';


export default function Textform(props) {
const [text, SetText] = useState('');

const handleUpperclick =  ()  => {
    // console.log('HandleUpper is Clicked ' + text);
    let newText  = text.toUpperCase();
    SetText(newText);
    props.showalert('Converted to Uppercase', 'success');
    
}
const handlelowerclick =  ()  => {
    
    let newText  = text.toLowerCase();
    SetText(newText);
    props.showalert('Converted to Lowercase', 'success');
    
}

const handleclearclick =  ()  => {
    
    let newText  = '';
    SetText(newText);
    props.showalert('Text Cleared', 'success');
}



const handleOnchange = (event) => {
    console.log('On changed function invoked ');
SetText(event.target.value);
}
const handleCopy = () => {
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert('Text Copied', 'success');
}
const RemoveExtraSpaces = ()  => {
    let newtext = text.split(/[ ] + /);
    SetText(newtext.join(' '));
}


// text = "Joban"; --> wrong way to change the text
// SetText("Joban"); //--> //correct way to change the text
// style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'  , color:  props.mode === 'dark' ? 'grey' : 'white' }}
return (
<>
<div className="container" style={{color:  props.mode === 'light' ? 'black' : 'white' }}>
<h1>{props.heading}</h1>

<div className="mb-3">

<textarea className="form-control" value = {text}  onChange={handleOnchange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'  ,color:  props.mode === 'light' ? 'black' : 'white' }} id="mybox" rows="8"  ></textarea>
</div>
<div className="btn btn-primary mx-3 my-3" onClick={handleUpperclick}>
    Convert To Uppercase
</div>
<div className="btn btn-success mx-3 my-3" onClick={handlelowerclick}>
    Convert To Lowercase
</div>
<div className="btn btn-info mx-3 my-3" onClick={RemoveExtraSpaces}>
Remove Extra Spaces 
</div>
<div className="btn btn-danger mx-3 my-3" onClick={handleclearclick}>
Clear 
</div>
<div className="btn btn-danger mx-3 my-3" onClick={handleCopy}>
Copy
</div>

</div>
<div className="container" style={{color:  props.mode === 'light' ? 'black' : 'white' }}>
<h1>Your Text Summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 *text.split(" ").length} Minutes read</p> 
<h1>Preview</h1>
<p>{text}</p>

</div>

   
</>
)
}
