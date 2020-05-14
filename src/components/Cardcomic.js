import React from "react";

const Cardcomic = ({ data }) => {
  console.log("data ===>", data.thumbnail.extension);

  const url = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <>
      <div className="card">
        <div className="title"> {data.title}</div>
        <div className="description"> {data.description}</div>
        <div>
          <img alt="comics" src={url} />
        </div>
      </div>
    </>
  );
};

export default Cardcomic;
