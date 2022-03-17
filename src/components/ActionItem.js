import React from "react";
import { Row } from "react-bootstrap";

const ActionItem = ({ toggleImageHandler, imageMap, id }) => {
  const clickHandler = () => {
    const imgMap = { ...imageMap };
    imgMap[id] = !imgMap[id];
    toggleImageHandler(imgMap);
  };
  return (
    <Row>
      <span style={{ color: "white" }}>{`Image${id}`}</span>
      <input
        type={"checkbox"}
        value={imageMap[id]}
        onChange={clickHandler}
        checked={imageMap[id]}
      />
    </Row>
  );
};

export default ActionItem;
