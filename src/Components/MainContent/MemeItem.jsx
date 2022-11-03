import React from "react";

const MemeItem = (props) => {
  return (
    <div>
      <img src={props.image} width={"300px"} />
    </div>
  );
};

export default MemeItem;
