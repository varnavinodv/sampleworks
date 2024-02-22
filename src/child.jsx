import React from 'react'


const Child = (props) => {
  return (
    <div className={`h-[20rem] w-[20rem] flex flex-col justify-center items-center ${props.cls}`}>
        <div className='  h-[100px] w-[100%]  '><img className='m-auto w-[90px] h-full rounded-3xl' src={props.img} alt="" /></div>
        <div className='font-semibold text-xl text-black'>{props.name}</div>
        <div className='font-normal text-base'>{props.job}</div>

      
    </div>
  )
}

export default Child
