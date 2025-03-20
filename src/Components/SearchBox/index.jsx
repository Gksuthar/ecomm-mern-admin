import React from 'react'
import { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = ({onSearchChange}) => {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value); 
  };

  return (
    <div className='w-full h-auto border border-[rgba(0,0,0,0.2)] bg-[#f1f1f1] relative'>
        <IoSearchOutline className='absolute top-[12px] left-[10px] z-50 pointer-events-none'/>
<input
  type="text"
  value={search}
  onChange={handleChange}
  className="w-full pl-8 h-[40px] bg-[#f1f1f1] text-[13px] rounded-sm    focus:outline-none focus:border focus:border-[rgba(0,0,0,0.5)] px-3 placeholder:text-[#999]"
  placeholder="Enter text here"
/>    </div>
  )
}

export default SearchBox
