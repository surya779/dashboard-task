import React from "react";

export default function SubCards() {
  const data = [
    "Lecture",
    "Tutorial",
    "Practical",
    "Credit Score",
    "CA",
    "FE",
    "Total",
  ];
  return (
    <div className="flex space-x-4 mt-5">
      {data.map((list, idx) => (
        <div
          key={idx}
          className="text-black border border-solid border-black flex items-center justify-between rounded-lg space-x-2 p-2 text-sm max-w-32 w-32 h-[50px]"
        >
          <p className="font-medium max-w-[40px]">{list}</p>
          <p>00</p>
        </div>
      ))}
    </div>
  );
}
