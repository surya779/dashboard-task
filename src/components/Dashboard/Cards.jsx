import React from "react";

export default function Cards() {
  const data = [
    "Professional core",
    "Professional Elective",
    " Open Elective",
    "Theory",
    "Laboratory",
    "Total Courses",
  ];
  return (
    <div className="flex space-x-4 mt-5">
      {data.map((list, idx) => (
        <div className="bg-[#3B4658] text-white flex items-center justify-between rounded-lg space-x-2  p-2 text-sm w-40 h-35">
          <p className="w-[70px]">{list}</p>
          <p>00</p>
        </div>
      ))}
    </div>
  );
}
