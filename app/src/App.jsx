import Personal from "../../component/personal_info"
import Education from "../../component/education_info";
import Practical from "./practical";
import { useState } from "react";
import edit from './assets/edit.svg';
export default function App()
{
  let [personalEdit,setPersonalEdit]=useState(true);
  let [addEducation,setEducation]=useState(false);
  let [practicalEdit,setPracticalEdit]=useState(false);
  let text=personalEdit==true?"Submit":"Edit";
  return (
    <div className="everything">
    <h1 className="head">CV</h1>
    <div className="CV">
      <div className="top-section">
        <section className="personal_info">
          <div> 
        <h1 className="personal">General Information</h1>
          <button onClick={() => setPersonalEdit(personalEdit==true?false:true)}><img src={edit}></img>{text}</button>
          </div>
          <Personal  edit={personalEdit}/>
        </section>
        <section className="education_info">
          <div>
          <h1 className="education">Educational Experience</h1>
          <button className="Add_btn" onClick={() => setEducation(true)}>Add</button>
          </div>
          <Education add={addEducation} onClose={() => setEducation(false)}/>
        </section>
      </div>
      <section className="practical_info">
        <div className="Practical-header">
        <h1 className="practical">Practical Experience</h1>
        <button className="add-btn" onClick={() => setPracticalEdit(true)}>Add</button>
        </div>
        <Practical add={practicalEdit} close={() => setPracticalEdit(false)} />
      </section>
    </div>
    </div>
  )
  }