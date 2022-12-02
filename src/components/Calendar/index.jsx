import React from "react";

export default function Calendar() {
  const data = [
    {
      avatar: "CA",
      text: "Calculus and its Application",
      icon: "star-gold",
    },
    {
      avatar: "CA",
      text: "Applied Physics",
      desc: "Alloted Sem : 7 PC",
    },
    {
      avatar: "PS",
      text: "Problem solving",
      icon: "star-white",
    },
    {
      avatar: "EP",
      text: "English for professional skills",
      icon: "star-white",
    },
    {
      avatar: "ML",
      text: "Mathematics Laboratory",
      icon: "star-gold",
    },
    {
      avatar: "CP",
      text: "C Programming Lab",
      icon: "star-white",
    },
    {
      avatar: "AP",
      text: "Applied Physics",
      icon: "star-gold",
    },
  ];
  return (
    <div className=" w-96 mt-7 ml-6 pt-8 px-6 rounded-lg shadow-2xl bg-white  h-[calc(100vh-32px)]">
      <div className="relative bg-[#6565b6]">
        <input
          className="w-full rounded-sm pl-10 h-8"
          type="text"
          placeholder="Search in Repositary"
        />
        <i className="fa fas fa-solid fa-magnifying-glass absolute left-3 top-3"></i>
      </div>
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center justify-center">Select Course</div>
        <div className="flex items-center justify-center">
          <i className="fa fas fa-light fa-filter"></i>
        </div>
      </div>

      <div className="flex flex-col space-y-4 mt-8">
        {data.map((list, idx) => (
          <div
            key={idx}
            className={`flex border border-solid border-black rounded-lg items-center justify-between ${
              list.desc ? "bg-[#E4E3E4]" : "bg-white"
            }`}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center p-2 ml-2">
                {list.desc ? (
                  <i className="fa-solid fa-check"></i>
                ) : (
                  list.avatar
                )}
              </div>
              <div className="text-xs p-2">
                <p className="font-bold whitespace-nowrap text-xs">
                  {list.text}
                </p>
                <div className="grid grid-cols-3 divide-x divide-gray-400">
                  <div className="">
                    <p>L:18</p>
                    <p>p:02</p>
                  </div>
                  <div className="px-2">
                    <p>L:18</p>
                    <p>p:02</p>
                  </div>
                  <div className="px-2">
                    <p>L:18</p>
                    <p>p:02</p>
                  </div>
                </div>
              </div>
            </div>
            {list?.desc ? (
              <div className="w-[60px] text-xs p-2 bg-gray-300 rounded-r-lg rounded-b-lg">
                <p>{list?.desc}</p>
              </div>
            ) : (
              <div className="flex p-2  flex-col items-center justify-center">
                <div className="flex">
                  <i className="fa fas fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div className="flex mt-2">
                  {list.icon === "star-white" ? (
                    <i className="fa-regular fa-star"></i>
                  ) : (
                    <i className="fa-solid fa-star text-yellow-300"></i>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
