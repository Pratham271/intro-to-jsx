import React , {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Clicked")
        setText(text.toUpperCase())
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase!", "success")

    }
    const handleOnChange = (event) => {
        // console.log("OnChange")
        setText(event.target.value)
    }

    const concatEmail = () => {
        setText(text+Math.floor(Math.random()*100)+"@gmail.com")
        props.showAlert("Email is concatenated!", "success")
        
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Exra space removed!", "success")

    }

    const clearText = () => {
        setText('')
        props.showAlert("Text is cleared!", "success")

    }

    const handleCapClick = () => {
        var arr = text.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        var str2 = arr.join(" ");
        setText(str2)
        props.showAlert("Converted to Capitalize!", "success")

}

    const [text,setText] = useState('');

    return (
        <>
        <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="input-group mb-3">
            <span className="input-group-text" style={{backgroundColor: props.mode === 'light'?'white':'#042743', color:props.mode === 'light'?'black':'white'}}>Textarea</span>
            <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'#042743', color:props.mode === 'light'?'black':'white'}} value={text} onChange={handleOnChange} aria-label="With textarea" rows={8}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCapClick}>Capitalize Letter</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            

            {text.length > 0 ? (
            <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>

            ):(
            <button className="btn btn-primary mx-1" disabled onClick={clearText}>Clear Text</button>

            )}
            {text.length > 0 && text.trim().split(/\s+/).length === 1 ? (
                <button className="btn btn-primary mx-1" onClick={concatEmail}>Generate Email</button>
            ): (
                <button className="btn btn-primary mx-1" disabled onClick={concatEmail}>Generate Email</button>
                
            )}

        </div>
        <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            {/* <p>{text.trim().split(/\s+/).length} words and {text.replace(/\s/g, '').length} characters</p> */}
            {text.length > 0 ? (
        <>
            <p>{text.trim().split(/\s+/).length} words and {text.replace(/\s/g, '').length} characters</p>
            <p>{0.008 * text.trim().split(/\s+/).length} minutes to read</p>
        </>
        ) : (
            <p>No text to summarize</p>
        )}
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>

    )
}
