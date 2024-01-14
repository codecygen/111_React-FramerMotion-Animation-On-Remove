// Slide In Animation to the First Order in List When a New Box is Added
// Collapse Animation When a Box is Deleted in a Box List

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Box from "./Box";

const BoxList = () => {
  const [boxes, setBoxes] = useState(["Box 2", "Box 1"]);

  // This is used to assess if the remove box and refresh animations to be played
  // or if add new item animation to be played.
  const [isOnMount, setIsOnMount] = useState(true);

  const handleDelete = (index) => {
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      newBoxes.splice(index, 1);
      return newBoxes;
    });

    setIsOnMount(true);
  };

  const handleAdd = () => {
    let newBoxName;

    if (boxes.length && boxes[0]) {
      const lastNumber = boxes[0].split(" ")[1];
      newBoxName = `Box ${+lastNumber + 1}`;
    } else {
      newBoxName = "Box 1";
    }

    setBoxes((prevBoxes) => [newBoxName, ...prevBoxes]);

    setIsOnMount(false);
  };

  return (
    <div className="box-list">
      <button onClick={handleAdd}>Add a Box</button>
      <AnimatePresence>
        {boxes.map((data, index) => {
          return (
            <motion.div
              key={data} // Ensure each box has a unique key
              layout // Add this prop to enable layout animation
              layoutTransition={{ duration: 1 }} // Optionally, customize the layout transition
              // Initial state defines the initial state of the mounted component
              // when it is first mounted
              // If we add a new item (!isOnMount), initial state of the newly mounted item
              // (added item) will be outside the page with opacity of 0.
              initial={
                isOnMount
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: "-100%" }
              }
              // This is about what the actual animation will be
              // Since initially isOnMount is set to true
              // All items will make move upward by 10px when components mounted (page refreshed)
              // If we add a new item (!isOnMount), it will be brought to the place where its supposed to be
              // from the initial state.
              animate={
                isOnMount ? { y: 10 } : { opacity: 1, x: 0, y: 10 }
              }
              // This is the animation to be performed when a component is removed.
              exit={{ opacity: 0, x: "-100%" }}
              // This is the animation duration
              transition={{ duration: 0.3 }}
            >
              <Box data={data} onDelete={() => handleDelete(index)} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default BoxList;
