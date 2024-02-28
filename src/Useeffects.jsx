import React from 'react'
import { useState,useEffect } from 'react'

const Useeffects = () => {
    
        const[count,setCount]=useState(0)
        const[count1,setCount1]=useState(0)
        useEffect(()=>{

            console.log('in mounting phase');
        
        },[])
        useEffect(()=>{
            return()=>{
                console.log('in unmounting phase');
        
            }
        },[])
        useEffect(()=>{
            console.log(count);
            console.log(count1);
        },[count,count1])
        let increment=()=>{
            setCount(count+1)
        }
        let increment1=()=>{
            setCount1(count1+1)
        }
    
        
        
  return (
    <div>
        
    <div>{count}</div>
    <button onClick={increment} className='bg-red-300'>increment</button>
    <div>{count1}</div>
    <button onClick={increment1} className='bg-blue-400'>Increment1</button>
      
    </div>
  )
}


export default Useeffects

