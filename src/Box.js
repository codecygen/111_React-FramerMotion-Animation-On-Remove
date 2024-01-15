import { useState, useEffect } from "react";

const Box = ({ data, onDelete }) => {
  const [editedStyles, setEditedSyles] = useState("box");
  const [name, setName] = useState(data);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setEditedSyles("box");
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [editedStyles]);

  const handleEdit = () => {
    const nameParts = name.split(" ");

    nameParts[0] = `Edited${nameParts[0]}`;
    const editedBoxName = nameParts.join(" ");

    setName(editedBoxName);

    setEditedSyles("box box-edited");
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className={editedStyles}>
      <p>{name}</p>
      <div className="flex">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Box;
