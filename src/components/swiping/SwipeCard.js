// import React from 'react';
// import { motion } from 'framer-motion';

// const SwipeCard = ({ profile, dragProps }) => {
//   return (
//     <motion.div 
//       className="relative p-4 bg-white shadow-md rounded-lg"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       {...dragProps}
//     >
//       <img src={profile.profilePictureUrl} alt="Profile" className="w-full rounded-t-lg" />
//       <div className="p-4">
//         <h2 className="text-xl font-bold">{profile.username}</h2>
//         <p>{profile.bio}</p>
//       </div>
//     </motion.div>
//   );
// };

// export default SwipeCard;
import React from 'react';
import { motion } from 'framer-motion';

const SwipeCard = ({ profile }) => {
  return (
    <motion.div 
      className="p-4 bg-white shadow-md rounded-lg cursor-grab"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={profile.profilePictureUrl} alt="Profile" className="w-full rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{profile.username}</h2>
        <p>{profile.bio}</p>
      </div>
    </motion.div>
  );
};

export default SwipeCard;
