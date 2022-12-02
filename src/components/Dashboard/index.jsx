import data from "../../sampledata.js";
import React, {useState, useRef} from "react";
import {nanoid} from "nanoid";
import Cards from "./Cards";
import SubCards from "./SubCards";
import Popup from "reactjs-popup";
import Header from "./Header";
import Dialog from "./Dialog";
import "reactjs-popup/dist/index.css";

export default function Dashboard() {
  const [toggleDialog, setToggleDialog] = useState(false);
  const [tableValue, setTableValue] = useState(data);
  const [actionToggle, setActionToggle] = useState(false);
  const [tableId, setTableId] = useState(null);
  const ref = useRef();

  const openTooltip = () => ref.current.open();
  const closeTooltip = () => ref.current.close();
  const toggleTooltip = () => ref.current.toggle();

  const deleteHandler = (id) => {
    const newData = [...tableValue];

    const index = tableValue.findIndex((tablevalue) => tablevalue.id === id);

    newData.splice(index, 1);
    setTableValue(newData);
  };

  return (
    <div className="bg-gray-100 mt-8 ml-6 pt-8 px-6 rounded-lg w-full h-[calc(100vh-32px)]">
      <div>
        <Header />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <i className="fa-sharp fa-solid fa-angle-left"></i>
          <h1 className="text-3xl font-bold	">Modify semester - 1</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-sm font-bold text-white rounded-lg w-24 h-8 flex items-center justify-center ">
            Save
          </button>
          <button className="text-blue-500 text-sm font-bold border border-solid border-blue-500 rounded-lg w-24 h-8 flex items-center justify-center ">
            Discard
          </button>
        </div>
      </div>
      <div className="mt-10">
        <Cards />
      </div>
      <div>
        <SubCards />
      </div>
      <div className="mt-10">
        <table className="table-auto border-separate border-spacing-0.5 w-full">
          <thead>
            <tr className="bg-[#E1E3F8] text-left">
              <th rowSpan="2">Course Code</th>
              <th rowSpan="2">Course Title</th>
              <th colSpan="3">Hours/Week</th>
              <th rowSpan="2">Credit</th>
              <th rowSpan="2">
                Prerequsite <br /> Courses
              </th>
              <th colSpan="3">Maximum marks</th>
              <th rowSpan="2">CAT</th>
              <th className="bg-gray-100"></th>
            </tr>
            <tr className="bg-[#E1E3F8] text-left">
              <th>L</th>
              <th>T</th>
              <th>H</th>
              <th>L</th>
              <th>T</th>
              <th>P</th>
            </tr>
          </thead>
          <tbody>
            {tableValue.map((storeData) => (
              <tr key={storeData.id} className="bg-white">
                <td>{storeData.course_code}</td>
                <td>{storeData.course_title}</td>
                <td>{storeData.hl}</td>
                <td>{storeData.ht}</td>
                <td>{storeData.hp}</td>
                <td>{storeData.credit}</td>
                <td>{storeData.prerequsite}</td>
                <td>{storeData.mca}</td>
                <td>{storeData.mfe}</td>
                <td>{storeData.mtotal}</td>
                <td>{storeData.cat}</td>
                <td className="bg-gray-100 relative">
                  <span className="ml-4">
                    <Popup
                      ref={ref}
                      position="left center"
                      trigger={
                        <i
                          onClick={() => setActionToggle(true)}
                          className="fa-solid fa-ellipsis-vertical cursor-pointer p-2"
                        ></i>
                      }
                    >
                      <div
                        onClick={() => {
                          setTableId(storeData.id);
                          setToggleDialog(true);
                          closeTooltip();
                        }}
                        className="my-2 ml-4 cursor-pointer"
                      >
                        <i className="fa fas fa-regular fa-pencil mr-2"></i>
                        Edit
                      </div>
                      <div
                        className="my-2 ml-4 cursor-pointer"
                        onClick={() => deleteHandler(storeData.id)}
                      >
                        <i className="fa fas fa-solid fa-trash-can mr-2"></i>
                        Delete
                      </div>
                    </Popup>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => setToggleDialog(true)}
        type="submit"
        className="text-blue-500 text-sm mt-5 float-right font-bold border border-solid border-blue-500 rounded-lg w-24 h-8 flex items-center justify-center "
      >
        Add
      </button>
      {toggleDialog && (
        <Dialog
          setToggleDialog={setToggleDialog}
          toggleDialog={toggleDialog}
          tableValue={tableValue}
          setTableValue={setTableValue}
          tableId={tableId}
          setTableId={setTableId}
        />
      )}
    </div>
  );
}
