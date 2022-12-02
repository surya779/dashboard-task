import React, {useState, useEffect, useRef} from "react";
import {nanoid} from "nanoid";
import data from "../../sampledata";

export default function Dialog({
  toggleDialog,
  setToggleDialog,
  tableValue,
  setTableValue,
  tableId,
  setTableId,
}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const [formData, setFormData] = useState({
    id: "",
    course_code: "",
    course_title: "",
    hl: "",
    ht: "",
    hp: "",
    credit: "",
    prerequsite: "",
    mca: "",
    mfe: "",
    mtotal: "",
    cat: "",
  });
  const handleFormData = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...formData};
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    if (tableId) {
      const index = tableValue.findIndex((data) => data.id === tableId);
      tableValue[index] = formData;
      setToggleDialog(false);
      setTableId(null);
      return;
    }

    const newValue = {
      id: nanoid(),
      course_code: formData.course_code,
      course_title: formData.course_title,
      hl: formData.hl,
      ht: formData.ht,
      hp: formData.hp,
      credit: formData.credit,
      prerequsite: formData.prerequsite,
      mca: formData.mca,
      mfe: formData.mfe,
      mtotal: formData.mtotal,
      cat: formData.cat,
    };

    setTableValue([...tableValue, newValue]);
    setToggleDialog(false);
    setTableId(null);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleDialog(false);
          setTableId(null);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    if (tableId) {
      const getTableData = tableValue.find((data) => tableId === data.id);
      setFormData(getTableData);
    }
  }, []);

  return (
    <div className="absolute  inset-0 w-full h-full bg-black bg-opacity-40 z-40">
      <div
        ref={wrapperRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden	w-[1050px] h-[75%]  bg-gray-200  shadow-2xl rounded-lg z-50 p-10"
      >
        <form onSubmit={handleAddFormSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold">Course Code</label>
              <input
                type="text"
                name="course_code"
                onChange={handleFormData}
                value={formData.course_code}
                className=" h-10 w-full mt-2 rounded-lg pl-4"
              ></input>
            </div>
            <div>
              <label className="block font-bold">Course Title</label>
              <input
                type="text"
                name="course_title"
                onChange={handleFormData}
                value={formData.course_title}
                className=" h-10 w-full mt-2 rounded-lg pl-4"
              ></input>
            </div>
            <div>
              <label className="block font-bold">Hours/Week L</label>
              <input
                type="number"
                name="hl"
                className=" h-10 w-full mt-2 rounded-lg pl-4"
                onChange={handleFormData}
                value={formData.hl}
              ></input>
            </div>
            <div>
              <label className="block font-bold">Hours/Week T</label>
              <input
                type="number"
                name="ht"
                className=" h-10 w-full mt-2 rounded-lg pl-4"
                value={formData.ht}
                onChange={handleFormData}
              ></input>
            </div>
            <div>
              <label className="block font-bold">Hours/Week P</label>
              <input
                type="number"
                name="hp"
                className=" h-10 w-full mt-2 rounded-lg pl-4"
                onChange={handleFormData}
                value={formData.hp}
              ></input>
            </div>
            <div>
              <label className="block font-bold">Credit</label>
              <input
                type="number"
                name="credit"
                className=" h-10 w-full mt-2 rounded-lg pl-4"
                onChange={handleFormData}
                value={formData.credit}
              ></input>
            </div>
            <div>
              <label className="block font-bold">Prerequsite</label>
              <input
                type="text"
                name="prerequsite"
                className=" h-10 w-full mt-2 rounded-lg pl-4"
                onChange={handleFormData}
                value={formData.prerequsite}
              ></input>
            </div>
            <div>
              <label className="block font-bold">Maximum Marks CA</label>
              <input
                type="number"
                name="mca"
                className=" h-10 w-full mt-2 rounded-lg pl-4"
                onChange={handleFormData}
                value={formData.mca}
              ></input>
            </div>
            <div>
              <label className="block font-bold">Maximum Marks FE</label>
              <input
                type="number"
                name="mfe"
                className=" h-10 w-full mt-2 rounded-lg pl-4"
                onChange={handleFormData}
                value={formData.mfe}
              ></input>
            </div>
            <div>
              <label className="block font-bold">Maximum Marks Total</label>
              <input
                type="number"
                name="mtotal"
                className=" h-10 w-full mt-2 rounded-lg pl-4"
                onChange={handleFormData}
                value={formData.mtotal}
              ></input>
            </div>
            <div>
              <label className="block font-bold">CAT</label>
              <input
                type="text"
                className=" h-10 w-full mt-2 rounded-lg pl-4"
                name="cat"
                value={formData.cat}
                onChange={handleFormData}
              ></input>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-sm font-bold text-white rounded-lg w-24 h-10 flex items-center justify-center mt-8"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
