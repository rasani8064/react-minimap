import React from "react";

const MinimapNode = ({ node, ...props }) => (
  <div
    style={{
      ...props,
      position: "absolute",
      width:'100px',
      backgroundColor: node.dataset.hlColor
    }}
  >
  </div>
);

export default MinimapNode;
