import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Box = ({ data, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <AnimatePresence>
      <motion.div
        key={data} // Ensure each box has a unique key
      >
        <div className="box">
          <p>{data}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Box;
