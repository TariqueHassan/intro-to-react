import React,{useState} from 'react';

const Task2 = () =>{
    const [name, setName] = useState("Tarique");
   
    return (
        <div>
        <button onClick={()=>setName("Suhail")}>Change Name</button>
        <h3>{name}</h3>
   
    </div>
    )

}

export default Task2;