import React from "react";
import Button from "./Button.js";
import Dog from "./Dog.js";

function Card(props) {


  const [url, setUrl] = React.useState(null)
  const getNewUrl = async () => {

    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setUrl(data.message);
  };
  const loaded = () => {
    return (
      <div className="card">
        This is Card
        <Button getnewurl={getNewUrl} />
        <Dog url={url} />
      </div>
    )
  };
  const loading = () => {
    return (
      <div className="loadingContainer">
        <h3>No Dog Picture Loaded</h3>
        <Button getnewurl={getNewUrl} />
      </div>
    )
  }
  return url ? loaded() : loading();
};

export default Card;