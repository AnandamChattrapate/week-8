import { useState } from "react";

const Search = ({ handleSearch }) => {
  const [searchType,setSearchType]=useState("title");

  const [value, setValue]=useState("");

  const onChangeHandler=(e)=>{
    const newValue = e.target.value;
    setValue(newValue);
    handleSearch(searchType, newValue);
  };
  const onDropdownChange = (e) => {
    setSearchType(e.target.value);

    // 
    setValue("");
    handleSearch(e.target.value, "");
  };

  return (
    <div className="flex gap-4 justify-center mt-5">
      <select value={searchType} onChange={onDropdownChange} className="border p-2 rounded">
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="category">Category</option>
      </select>
      <input
        type={searchType=="price"?"number":"text"}
        placeholder={`Search by ${searchType}`}
        value={value}
        onChange={onChangeHandler}
        className="border p-2 rounded"
      />
    </div>
  );
};

export default Search;