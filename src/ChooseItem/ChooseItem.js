import React from "react";

const ChooseItem = ({chooseItem}) => {
  return (
    <div>
      <button onClick={() => chooseItem()} className="btn btn-success">Choose The Best</button>
    </div>
  );
};

export default ChooseItem;
