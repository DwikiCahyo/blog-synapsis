import React from "react";

export default function Loading({ mssg }: { mssg: string }) {
  return (
    <div className="flex justify-center items-center">
      <h1 className="font-bold text-2xl text-primary">Load {mssg} ...</h1>
    </div>
  );
}
