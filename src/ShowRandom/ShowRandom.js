import React from "react";

const ShowRandom = (props) => {
    console.log(props);
  const { title, img } = props.itm;
  return (
    <div>
      <div className="row d-flex">
        <div className="col-md-6">
          <img
            className="img-fluid rounded-circle w-50 pt-2"
            src={img}
            alt=""
          />
        </div>
        <div className="col-md-6 d-flex">
          <h3 className="pt-3">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ShowRandom;
