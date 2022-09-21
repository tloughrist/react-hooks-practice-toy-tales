import React from "react";

function ToyCard(props) {

  function delClick() {
    return props.donate(props.id);
  }

  function likeClick() {
    return props.like(props.id, props.likes);
  }

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img
        src={props.image}
        alt={props.name}
        className="toy-avatar"
      />
      <p>{props.likes} Likes </p>
      <button onClick={likeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={delClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;