import React from 'react'
import Stack from '@mui/material/Stack';

const ProgressBar = (props) => {
  return (
    <div className='w-[100px] h-auto overflow-hidden rounded-sm'>
        <span style={{ width: `${props.value}px` }}  className={`flex items-center  h-[7px]  ${props.type==="success" && 'bg-green-600'} ${props.type==="warning" && 'bg-yellow-500'} ${props.type==="error" && 'bg-red-600'}`}></span>
    </div>
  )
}

export default ProgressBar
