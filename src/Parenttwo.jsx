import React from 'react'
import img1 from './image.jpg'
import Child from './child'

const Parenttwo = () => {
    let a=[
        {img:img1,name:'adam',job:'developer',cls:'bg-slate-500'},
        {img:img1,name:'john',job:'developer',cls:'bg-slate-500'},
        {img:img1,name:'jony',job:'developer',cls:'bg-slate-500'},
        {img:img1,name:'jony',job:'developer',cls:'bg-slate-500'},
        {img:img1,name:'jony',job:'developer',cls:'bg-slate-500'},
        {img:img1,name:'jony',job:'developer',cls:'bg-slate-500'}
    ]
  return (
    <div className='flex w-[70%] m-auto flex-wrap gap-6 justify-center'>
        

            {a.map((item)=>(
                
                <Child img={item.img} name={item.name} job={item.job} cls={item.cls}/>
                
                
                ))}
        

      
    </div>
  )
}

export default Parenttwo
