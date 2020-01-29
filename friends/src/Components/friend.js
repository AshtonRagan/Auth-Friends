import React, { useState } from "react";

const Friend = props => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div
      className="Card"
      onClick={e => {
        e.preventDefault();
        setIsopen(!isOpen);
      }}
    >
      {isOpen ? (
        <>
          <h3>{props.item.name}</h3>
          <h4>Email: {props.item.email}</h4>
          <h4>Age: {props.item.age}</h4>
        </>
      ) : (
        <>
          <h3>{props.item.name}</h3>
        </>
      )}
    </div>
  );
};

export default Friend;
