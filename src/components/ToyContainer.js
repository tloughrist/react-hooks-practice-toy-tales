import React from "react";
import ToyCard from "./ToyCard";

let toyCardDisplay = [];

function ToyContainer(props) {

  props.isLoaded ? makeToyCards(props.toyData) : toyCardDisplay = <h3>Toys loading...</h3>;

  function makeToyCards(array) {
    const toyCardArr = array.map((toy) => {
      return <ToyCard key={toy.name} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} donate={props.donate} like={props.handleLike}/>
    })
    return toyCardDisplay = toyCardArr;
  }

  return (
    <div id="toy-collection">{toyCardDisplay}</div>
  );
}

export default ToyContainer;
