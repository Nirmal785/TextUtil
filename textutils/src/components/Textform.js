import React, {useState} from 'react'


export default function TextForm(props) {

    const [Text, setText] = useState("");
    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to Uppercase!!", "success");
    }

    const handleLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Text converted to Lowercase!!", "success");
    }
    const handleClearClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared!", "success");
    }

    
    const handleReverseClick = () => {
        let newText = Text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text Reversed!", "success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(Text);
        props.showAlert("Text copied to clipboard!", "success");
    }
    
    const handleTrimSpacesClick = () => {
        let newText = Text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra Spaces Removed!", "success");
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    
    
    return (
        <>
        <div className="container my" style={{color : props.mode ==='dark'?'white':'black'}}>
        <h1 >{props.Heading}</h1>
        <div className="mb-3">
           
            <textarea className="form-control" id="mybox"  value={Text}  onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'?'#110e10':'white' ,color : props.mode ==='dark'?'white':'black' }} rows="9"></textarea>
            <button disabled={Text.length===0} className= {`btn btn-${props.mode ==='light'?'dark':'light'} mx-1 my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={Text.length===0}  className= {`btn btn-${props.mode ==='light'?'dark':'light'} mx-1 my-2`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={Text.length===0} className= {`btn btn-${props.mode ==='light'?'dark':'light'} mx-1 my-2`} onClick={handleClearClick}>Clear Text</button>
            <button disabled={Text.length===0} className={`btn btn-${props.mode ==='light'?'dark':'light'} mx-1 my-2`} onClick={handleCopyClick}>Copy Text</button>
            <button disabled={Text.length===0} className= {`btn btn-${props.mode ==='light'?'dark':'light'} mx-1 my-2`} onClick={handleReverseClick}>Reverse Text</button>
            <button disabled={Text.length===0} className= {`btn btn-${props.mode ==='light'?'dark':'light'} mx-1 my-2`} onClick={handleTrimSpacesClick}>Remove Extra Spaces</button>
        </div>
        </div>

        <div className="container 3" style={{ color : props.mode ==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
            <p> {0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Mininutes Read</p>
            <h2>Priview</h2>
            <p>{Text.length>0 ?Text:"Nothing to Preview" }</p>
        </div>
        </>
    )
}
