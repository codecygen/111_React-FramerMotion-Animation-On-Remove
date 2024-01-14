import React from "react";

const Box = ({ data, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="box">
      <p>{data}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Box;
