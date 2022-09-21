import React from "react";

function ToyForm(props) {

  function onSubmit(e) {
    e.preventDefault();
    const nameInput = e.target.firstChild.nextSibling;
    const br = nameInput.nextSibling;
    const imageInput = br.nextSibling;
    e.target.reset();
    return props.handlePost(nameInput.value, imageInput.value);
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
