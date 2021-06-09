import React from "react";

const TaskItem = ({ todo, handleDelete, handleComplete }) => {
  return (
    <div className="task">
      <p className={todo.isDone? "Done": null}>{todo.task}</p>
      <div>
        <button onClick={()=> handleComplete(todo.id)}>{todo.isDone? "Undo": "complete"}</button>
        <button onClick={() => handleDelete(todo.id)}>delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
