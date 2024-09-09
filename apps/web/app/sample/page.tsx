"use client";

import Resize from "../../components/ResizableComponent";

export default function Page() {
  return (
    <div className="w-full flex overflow-hidden">
      <div className="bg-red-50 mx-1">
        <Resize style={{ width: "100%", minWidth: "1px" }}>Left</Resize>
      </div>
      <div className="bg-green-50 mx-1 w-full min-w-1">
        Right
      </div>
    </div>
  );
}
