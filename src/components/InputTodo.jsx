import React, { Fragment, useState } from "react";

// Add data to psql

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const todoAddText = (e) => {
    setDescription(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { descript: description };
      await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={description} onChange={todoAddText} />
        <button onClick={()=>window.location="/"}>Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;

// 52:49
