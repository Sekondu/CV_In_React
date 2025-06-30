import { useState } from "react";
export default function Practical({add,close})
{
    let [AllItems,setitems]=useState([]);
    function addItems(item)
    {
        setitems([...AllItems,item]);
    }
    function update(updateitem)
    {
        setitems(AllItems.map(item => item.id===updateitem.id?updateitem:item));
    }
//main section will include two implementations one with presenting all items (when editing this renders)
//then next section will include presenting all items then adding a new one
if(add===true)
{
   return <> <ShowItems items={AllItems} update={update}/>
    <AddNew add={addItems} close={close}/>
    </>
}
else{
   return <ShowItems items={AllItems} update={update}/>
}
}
function AddNew({add,close})
{
    let [formData,setFormData]=useState({
        id:crypto.randomUUID(),
        company:"",
        position:"",
        responsibilities:"",
        sDate:"",
        eDate:"",
    })
    function handleForm(event)
    {
        setFormData({...formData,[event.target.name]:event.target.value});
    }
   return <form action="" onSubmit={
        (e) => {
            e.preventDefault()
            setFormData(formData)
            add(formData)
            close()
        }
        }>
            <label htmlFor="company">Company Name</label>
        <input type="text" name="company" onChange={handleForm} required/>
                <label htmlFor="position">Position Name</label>
        <input type="text" name="position" onChange={handleForm} required/>
                <label htmlFor="responsibilities">Your Work</label>
        <textarea type="text" name="responsibilities" onChange={handleForm} required/>
                <label htmlFor="sDate">Start Date</label>
        <input type="date" name="sDate" onChange={handleForm} required/>
                <label htmlFor="eDate">End Date</label>
        <input type="date" name="eDate" onChange={handleForm} required/>
        <button type="submit">Submit</button>
        <button onClick={() => close()}>Cancel</button>
    </form>
}
function ShowItems({items,update})
{
    let [edit,setEdit]=useState(null);
    return <> {items.map(item =>
    {
        if(edit===item.id)
        {
           return <Edit item={item} update={update} setEdit={setEdit}/>
            }
    else{

    return <div key={item.id}>
        <div className="practical-data">
    <h3>{item.company}</h3>
    <p>-<em>{item.position}</em></p>
        </div>
    <h3>{item.responsibilities}</h3>
    <div className="practical-date">
    <h4>from {item.sDate} to {item.eDate}</h4>
    <div className="practical-btn">
    <button onClick={() => setEdit(item.id)}>Edit</button>
    <button>Remove</button>
    </div>
    </div>
    </div> 
}
    }
)
}</>
}
function Edit({item,update,setEdit})
{
    let [formData,setform]=useState(item);
    function handleForm(event)
    {
        setform({...formData,[event.target.name]:event.target.value});
    }
return(
            <form action="" onSubmit={
            (e) => {
            e.preventDefault()
            setEdit(null)
            update(formData)
            }
            }>
                <label htmlFor="company">Company Name</label>
        <input type="text" name="company" value={formData.company} onChange={handleForm} required/>
                <label htmlFor="position">Position Name</label>
        <input type="text" name="position" value={formData.position} onChange={handleForm} required/>
                <label htmlFor="responsibilities">Your Work</label>
        <textarea type="text" name="responsibilities" value={formData.responsibilities} onChange={handleForm} required/>
                <label htmlFor="sDate">Start Date</label>
        <input type="date" name="sDate" value={formData.sDate} onChange={handleForm} required/>
                <label htmlFor="eDate">End Date</label>
        <input type="date" name="eDate" value={formData.eDate} onChange={handleForm} required/>
        <button type="submit">Confirm</button>
        <button type="button" onClick={() => setEdit(null)}>Cancel</button>
    </form>
    )
}