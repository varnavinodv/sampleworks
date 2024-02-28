import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Datafetchsearch = () => {
    const [search,setSearch]=useState('')
  const [data,setData]=useState([''])

let fetchdata=async ()=>{
  let response=await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`)
  console.log(response.data.Search);
  setData(response.data.Search)
}
let handlechange=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <div className='text-red-900'>
    <input onChange={handlechange} type="text" name="" id="" />
    <button onClick={fetchdata}>search</button>




{
data.map((item)=>(
  <div className='bg-blue-600 text-white mb-4'>
 <Link to={`/fetchdata/${item.imdbID}`}><img src={item.Poster} alt="" /></Link>
  </div>

))
}

  </div>
  )
}

export default Datafetchsearch
