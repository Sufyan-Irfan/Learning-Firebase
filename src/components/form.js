import React, {useState} from 'react'

export default function Form(props) {

    const handleupclick = ()=>{
        let newtext = text.toUpperCase()
        settext(newtext)
        props.showalert("Converted to uppercase" , "success")
    }

    const handleloclick = ()=>{
        let newtext = text.toLowerCase()
        settext(newtext)
        props.showalert("Converted to lowercase" , "success")
    }

    const handleclearclick = ()=>{
        let newtext = ""
        settext(newtext)
        props.showalert("Text Cleared" , "success")
    }

    const handlecopy = ()=>{
        let text = document.getElementById("textbox")
        // text.select()
        navigator.clipboard.writeText(text.value)
        props.showalert("Text Copied!" , "success")
    }

    const handleextraspaces = ()=>{
        let newtext = text.split(/[ ]+/)
        settext(newtext.join(" "))
        props.showalert("Extra spaced removed" , "success")
    }

    const handlecapclick = ()=>{
        var arr = text.split(" ")
        var a = arr.length
        var temp = ""
        while(a!==0){
            temp = arr[a-1].charAt(0).toUpperCase()+arr[a-1].substring(1).toLowerCase()+" "+temp
            a--;
        }
        settext(temp)
        props.showalert("Capitialized!")
    }

    const handleonchange = (event)=>{
        settext(event.target.value)
    }

    const [text , settext] = useState('')

    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h2 >{props.heading}</h2>
        <div className="mb-3 mt-4" >
            <textarea className="form-control" value={text} onChange={handleonchange} id="textbox" rows="8" style={{backgroundColor : props.mode ==='light'?'white':'lightgray' }} placeholder='Enter yout text here'></textarea>
            <button type="button" onClick={handleupclick} className="btn btn-outline-secondary my-3">Convert to Uppercase</button>
            <button type="button" onClick={handleloclick} className="btn btn-outline-secondary my-3 mx-2">Convert to Lowercase</button>
            <button type="button" onClick={handlecapclick} className="btn btn-outline-secondary my-3 mx-2">Capitialize</button>
            <button type="button" onClick={handleclearclick} className="btn btn-outline-secondary my-3 mx-2">Clear All</button>
            <button type="button" onClick={handlecopy} className="btn btn-outline-secondary my-3 mx-2">Copy Text</button>
            <button type="button" onClick={handleextraspaces} className="btn btn-outline-secondary my-3 mx-2">Remove extra spaces</button>
        </div>
        </div>
        <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h2>Your text summary here!</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } minutes need to read above text</p>
            <h3>Preview:</h3>
            <p>
                {text===""?'Your text preview here':text}
            </p>
        </div>
        </>
    )
}