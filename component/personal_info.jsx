import { useState } from "react"
export default function Personal({edit})
{
    return <>
    <Input label={"Full Name"} type={"text"} edit={edit}/>
    <Input label={"Email"} type={"email"} edit={edit}/>
    <Input label={"Phone Number"} type={"tel"} edit={edit}/>
    </>
}
function Input({label,type,edit})
{
    let [text,setText]=useState("");
    if(!edit)
    {
        return <div className="data">
        <label>{label}</label>
        <p className="data_text">{text}</p>
        </div>
    }
    else{
return <div className="data">
    <label>{label} </label>
    <input type={type} className="data_input" value={text}
    onChange={(event) => setText(event.target.value)}></input>
    </div>
    }
}