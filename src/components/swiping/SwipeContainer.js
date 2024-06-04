import React, { useContext, useState } from "react";
import SwipeCard from "./SwipeCard";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { MainContext } from "../../context/MainContext";
import Notification from "../Notification";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const SwipeContainer = () => {
  const { state, dispatch } = useContext(MainContext);
  const { profiles, currentIndex } = state;
  const [notification, setNotification] = useState(null);

  const swipeThreshold = 100;
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);
  const controls = useAnimation();

  const handleSwipe = async (direction) => {
    setNotification({ message: direction === "right" ? "Liked" : "Nope", type: direction === "right" ? "success" : "error" });

    await controls.start({
      x: direction === "right" ? 2000 : -2000,
      transition: { duration: 0.2 },
    });

    dispatch({ type: 'NEXT_PROFILE' });

    x.set(0);
    controls.start({ x: 0, rotate: 0 });
  };

  const handleDragEnd = async (event, info) => {
    if (info.offset.x > swipeThreshold) {
      await handleSwipe("right");
    } else if (info.offset.x < -swipeThreshold) {
      await handleSwipe("left");
    } else {
      controls.start({ x: 0, rotate: 0 });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onHide={() => setNotification(null)}
        />
      )}
      {profiles.length > 0 && currentIndex < profiles.length ? (
        <>
          <motion.div
            drag="x"
            style={{ x, rotate }}
            animate={controls}
            onDragEnd={handleDragEnd}
            dragConstraints={{ left: -swipeThreshold, right: swipeThreshold }}
          >
            <SwipeCard profile={profiles[currentIndex]} />
          </motion.div>
          <div className="mt-4 flex space-x-4">
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => handleSwipe("left")} 
              startIcon={<ClearIcon />}
            >
              Nope
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => handleSwipe("right")} 
              startIcon={<CheckIcon />}
            >
              Like
            </Button>
          </div>
        </>
      ) : (
        <p>No more profiles.</p>
      )}
    </div>
  );
};

export default SwipeContainer;
