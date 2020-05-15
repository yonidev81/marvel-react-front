import React from "react";

const Cardcomic = ({ data }) => {
  console.log("data ===>", data.thumbnail.extension);

  const url = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <main>
      <div className="card">
        <div>
          <img alt="comics" src={url} />
        </div>
        <div className="comiccontent">
          <div className="title"> {data.title}</div>
          <div className="description"> {data.description}</div>
        </div>
      </div>
    </main>
  );
};

export default Cardcomic;
