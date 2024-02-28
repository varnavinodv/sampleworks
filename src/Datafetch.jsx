import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Datafetch = () => {
    const [data,setData]=useState('')
    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    },[])
    
  return (
    <div className='text-red-600'>
    <img src={data.Poster} alt="" />
    <h2>{data.Title}</h2>
    <h2>{data.Year}</h2>
</div>
  )
}

export default Datafetch
