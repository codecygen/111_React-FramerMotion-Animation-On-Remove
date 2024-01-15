const Box = ({ data, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="box">
      <p>{data}</p>
      <div className="flex">
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Box;
