import React, { useState, useEffect } from 'react';

const TimeAgo = ({ createdAt }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentDate = new Date();
      const createdDate = new Date(createdAt);
      const timeDifference = currentDate - createdDate;
      const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      let result = '';

      if (daysAgo === 0) {
        const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
        if (hoursAgo === 0) {
          const minutesAgo = Math.floor(timeDifference / (1000 * 60));
          result = `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
        } else {
          result = `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
        }
      } else {
        result = `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
      }

      setTimeAgo(result);
    };

    calculateTimeAgo();
  }, [createdAt]);

  return <span className='font-semibold'>{timeAgo}</span>;
};

export default TimeAgo;
