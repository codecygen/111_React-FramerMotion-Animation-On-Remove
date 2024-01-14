// Collapse Animation When a Box is Deleted in a Box List

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Box from "./Box";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const handleDelete = (index) => {
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      newBoxes.splice(index, 1);
      return newBoxes;
    });
  };

  const handleAdd = () => {
    let newBoxName;

    if (boxes[0]) {
      const lastNumber = boxes[0].split(" ")[1];
      newBoxName = `Box ${+lastNumber + 1}`;
    } else {
      newBoxName = "Box 1";
    }

    setBoxes((prevBoxes) => [newBoxName, ...prevBoxes]);
  };

  return (
    <div className="box-list">
      <button onClick={handleAdd}>Add a Box</button>
      <AnimatePresence>
        {boxes.map((data, index) => (
          <motion.div
            key={data} // Ensure each box has a unique key
            layout // Add this prop to enable layout animation
            layoutTransition={{ duration: 0.05 }} // Optionally, customize the layout transition
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            // Slide upward Animation on Page Load
            animate={{ y: 10 * index }} // Adjust the value based on your preference
            transition={{ duration: 0.3 }}
          >
            <Box data={data} onDelete={() => handleDelete(index)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BoxList;
