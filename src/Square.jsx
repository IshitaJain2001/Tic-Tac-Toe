import React from 'react'

export default function Square(props) {
  return (
    <div className='border border-gray-500 flex justify-center items-center w-[100px]' onClick={props.onClick}>
     <h3>{props.value}</h3> 
    </div>
  )
}
