

export default function About(props) {

    let mystyle = {
        color : props.mode === 'dark'?'white': 'black',
        backgroundColor : props.mode === 'dark'?'black': 'white'
    }
  
  
  return (
    <div className='container' style={mystyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
           <strong>Convert Text to Uppercase/Lowercase</strong> 
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body " style={mystyle}>
            Easily switch between uppercase and lowercase with just a click. Whether you're formatting a title or standardizing text, our tools make it simple.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
              <strong>Clear Text & Remove Extra Spaces</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
            Quickly clear text to start fresh or remove unnecessary spaces to clean up your content. These tools help ensure your text is neat and ready for use.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
            <strong>Copy Text & Reverse Text</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
            Copy your processed text with ease. Our copy tool allows you to transfer your formatted content wherever you need it with just one click.Reverse Text is used to reverse your all text on one click.
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}
