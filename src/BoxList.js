// Collapse Animation When a Box is Deleted in a Box List

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Box from "./Box";

const BoxList = () => {
  const [boxes, setBoxes] = useState(["Box 1", "Box 2", "Box 3", "Box 4", "Box 5", "Box 6"]);

  const handleDelete = (index) => {
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      newBoxes.splice(index, 1);
      return newBoxes;
    });
  };

  return (
    <div className="box-list">
      <AnimatePresence>
        {boxes.map((data, index) => (
          <motion.div
            key={data} // Ensure each box has a unique key
            layout // Add this prop to enable layout animation
            layoutTransition={{ duration: 0.05 }} // Optionally, customize the layout transition
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            animate={{ y: 10 * index }} // Adjust the value based on your preference // Slide upward Animation on Page Load
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
