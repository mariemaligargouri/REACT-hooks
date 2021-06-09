import React, { useState } from "react";

const AddTask = ({handleAdd}) => {
  const [text, setText] = useState("");
  console.log(text)
  return <div className="Add">
      <input type="text" onChange={e=> setText(e.target.value)} value={text}/>
      <button onClick= {()=> {handleAdd(text); setText("")}}>Add Task</button>

  </div>;
};

export default AddTask;
