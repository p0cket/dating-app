import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Notification = ({ message, type, onHide }) => {
  const controls = useAnimation();

  useEffect(() => {
    const showNotification = async () => {
      await controls.start({ opacity: 1, y: 0 });
      setTimeout(() => {
        controls.start({ opacity: 0, y: -20 }).then(onHide);
      }, 2000); // Adjust duration as needed
    };

    showNotification();
  }, [controls, onHide]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      className={`fixed top-10 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white text-2xl font-bold ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {message}
    </motion.div>
  );
};

export default Notification;
