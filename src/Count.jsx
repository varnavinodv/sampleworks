import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0)
    const [str,setstr]=useState([])
    let increment=()=>{
        
        setCount(count+1)
    
    }
    let decrement=()=>{
        if (count!=0){
        
        setCount(count-1)
    }
   
    
}
let setdata=()=>{
    setstr([
        {name:'abc',
         age:21
        },
             
       {
        name:'ghf',
        age:45
       }
       ])
}        
  return (
    <div>
        <h1>{count}</h1>
        {str.map((item)=>( 
        <div>
            <h1>{item.name}</h1>
           <h1> {item.age}</h1>
            </div>
        ))}
        
       <button className='bg-slate-700 p-2 text-white' onClick={setdata} >Data</button> <br />
      <button className='bg-gray-800 p-2 text-zinc-50 ' onClick={increment}>Increment</button> <br />
      <button className='bg-gray-800 p-2 text-zinc-50' onClick={decrement}>Decrement</button> <br />
    </div>
  )
}


export default Count
