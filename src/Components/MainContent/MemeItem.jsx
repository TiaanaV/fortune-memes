import React from "react";

const MemeItem = (props) => {
  return (
    <div>
      <img src={props.imageUrl} width={"350px"} />
    </div>
  );
};

export default MemeItem;
