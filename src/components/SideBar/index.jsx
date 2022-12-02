import React from "react";
export default function SideBar() {
  const data = [
    {
      icon: "fa fas fa-thin fa-xl fa-book-open-reader",
    },
    {
      icon: "fa fas fa-xl fa-solid fa-bars",
    },
    {
      icon: "fa fas fa-brands fa-xl fa-edge-legacy",
    },
    {
      icon: "fa fas fa-brands fa-xl fa-squarespace",
    },
    {
      icon: "fa-solid fa-xl fa-user-graduate",
    },
    {
      icon: "fa-solid fa-xl fa-calendar-days",
    },
    {
      icon: "fa-solid fa-xl fa-user-group",
    },
    {
      icon: "fa-solid fa-xl  fa-calendar-days",
    },
  ];
  return (
    <div className="bg-[#3B4658] h-screen">
      <ul className="flex flex-col space-y-6 items-center mt-10">
        {data.map((list, idx) => (
          <li
            className="pr-5 ml-2 pl-3 text-white rounded-tl-md rounded-bl-md py-3 
            "
          >
            <i className={list.icon}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}
