import React, { useState } from "react";

function CreateArea(props) {

  const [item, setItem] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setItem( (prev) => {
      return {
        ...prev,
        [name]: value
      }
    }); 
  }

  function submit(event) {
    event.preventDefault();
    props.onSave(item);
    setItem({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input 
          onChange={handleChange} 
          name="title" placeholder="Title" 
          value={item.title} />

        <textarea 
          onChange={handleChange} 
          name="content" placeholder="Take a note..." rows="3" 
          value={item.content} />
          
        <button onClick={submit} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;