import { Resizable } from "re-resizable";
import React from "react";

const Resize = ({children , style} : any) => (
  <Resizable
    style={style}
    defaultSize={{
      width: 500,
      height: 500
    }}
  >
    {children}
  </Resizable>
);

export default Resize;