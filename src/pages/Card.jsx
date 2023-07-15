import React from 'react';

const Card = (props) => {
  const { day } = props; 

  return (
    <div>
      <div className="sbox">
            <div className="smboc"></div>
             <h5>{day}</h5>
             <p>Unavailable</p>
         </div>
    </div>
  );
};

export default Card;
