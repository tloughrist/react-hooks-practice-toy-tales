import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((response) => response.json())
    .then((data) => setToyData(data))
    .then(() => setIsLoaded(true))
  }, []);

  function handleClick() {
    return setShowForm((showForm) => !showForm);
  }

  function handlePost(name, image) {
    const newToyObj = {
      name: name,
      image: image,
      likes: 0
    };
    return (fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToyObj)
    })
    .then((response) => response.json())
    .then((data) => setToyData([...toyData, data])));
  };

  function handleDonate(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      })
    .then(() => fetch("http://localhost:3001/toys"))
    .then((response) => response.json())
    .then((data) => setToyData(data))
    return;
    }

  function handleLike(id, likeCount) {
    const newLikeCount = likeCount + 1;
    const likeObj = {
      likes: newLikeCount
    }
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(likeObj)
    })
    .then(() => fetch("http://localhost:3001/toys"))
    .then((response) => response.json())
    .then((data) => setToyData(data))
    return;
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handlePost={handlePost}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} isLoaded={isLoaded} donate={handleDonate} handleLike={handleLike}/>
    </>
  );
}

export default App;