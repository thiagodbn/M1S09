import { useState } from "react"
import "./style.css"


function TextName(){
    const[name, setName] = useState("");

    return(
        <div className="App">
            <h2>Meu nome é:{name}</h2>
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}/>


        </div>
    )
}

export default TextName