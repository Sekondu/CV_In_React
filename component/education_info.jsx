import { useState } from "react";
import image from '../app/src/assets/edit.svg'
export default function Education({add, onClose})
{
    let [items,addItems]=useState([]);
    let [edit,setEdit]=useState();
    function handleEdit(id)
    {
        setEdit(edit===id?null:id)
    }
    function setting(object)
    {
        addItems([...items,object]);
    }
    function handleUpdate(updateitem)
    {
        addItems(items.map(item => item.id===updateitem.id?updateitem:item));
    }
    function Remove(Id)
    {
        addItems(items.filter(item => item.id!=Id));
    }

    if(add)
    {
    let object={
        school:"",
        cert:"",
        Sdate:"",
        Edate:"",
    }
return<>
        <OldItems items={items} handler={handleEdit} edit={edit} update={handleUpdate} remove={Remove}/>
        <AddItem set={setting} items={items} object={object} close={onClose} editHandler={handleEdit} />
        </>
    }
    else{
        return <>
        <OldItems items={items} handler={handleEdit} edit={edit} update={handleUpdate} remove={Remove}/>
        </>
    }
}
function AddItem({set,close})
{

    let [formData,setformData]=useState({
        id:crypto.randomUUID(),
        school:"",
        cert:"",
        sDate:"",
        eDate:"",
    })
    function handleChange(e)
    {
        setformData({...formData,[e.target.name]:e.target.value});
    }
   return  <>
   <form action="" onSubmit={(e)=> {
        e.preventDefault();
        setformData(formData);
        close();
        set(formData);
    }}>
    <label htmlFor="school">School</label>
    <input type="text" name="school" required={true} onChange={handleChange}/>
    <label htmlFor="cert">Certificate</label>
    <input type="text" name="cert" required={true} onChange={handleChange}/>
    <label htmlFor="Sdate">Start Date</label>
    <input type="date" name="sDate" required={true} onChange={handleChange} />
    <label htmlFor="Edate">End Date</label>
    <input type="date" name="eDate" required={true} onChange={handleChange} />
    <div className="form_btn">
    <button type="submit">Submit</button>
    <button type="button" onClick={() => close()}>Cancel</button>
    </div>
    </form>
    </>
}
function OldItems({items, handler,edit,update,remove})
{
return <> {items.map((item) =>
   { 
    if(item.id===edit)
    {
       return <EditItem item={item} editHandler={handler} update={update} />
    }
    else{
        return <div className="edu_data">
        <h3>{item.school}</h3>
        <p>Certificate: {item.cert}</p>
        <p>from {item.sDate} to {item.eDate}</p>
        <div className="form_btn">
        <button onClick={() => handler(item.id)}>Edit</button>
        <button onClick={()=> remove(item.id)}>Remove</button>
        </div>
        </div>
    }
   })}
    </>
}
function EditItem({item,editHandler,update})
{
let [formData,setformData]=useState(item);
function handleChange(e)
{
    setformData({...formData,[e.target.name]:e.target.value});
}
function handleSubmit(e)
{
    e.preventDefault();
    update(formData);
    editHandler(null);
}
    return  <>
   <form action="" onSubmit={handleSubmit} className="edu_form">
    <label htmlFor="school">School</label>
    <input type="text" name="school" required={true} value={formData.school} onChange={handleChange}/>
    <label htmlFor="cert">Certificate</label>
    <input type="text" name="cert" required={true} value={formData.cert} onChange={handleChange}/>
    <label htmlFor="Sdate">Start Date</label>
    <input type="date" name="sDate" required={true} value={formData.sDate} onChange={handleChange} />
    <label htmlFor="Edate">End Date</label>
    <input type="date" name="eDate" required={true} value={formData.eDate} onChange={handleChange} />
    <div className="form_btn">
    <button type="submit">Submit</button>
    <button onClick={() => editHandler(null)}>Cancel</button>
    </div>
    </form>
    </>

}