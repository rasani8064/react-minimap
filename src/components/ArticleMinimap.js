import React from "react";
import ReactMinimap from "react-minimap";
import MinimapNode from "./MinimapNode";

import "react-minimap/dist/react-minimap.css";

const ArticleMinimap = ({ children }) => (
  <ReactMinimap
    selector=".highlight"
    height={window.innerHeight}
    width={100}
    childComponent={MinimapNode}
  >
    {children}
  </ReactMinimap>
);

export default ArticleMinimap;
