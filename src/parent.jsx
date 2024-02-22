import React from 'react'
import Child from './child'
import im1 from './image.jpg'

const Parent = () => {
  return (
    <div className='flex w-[70%] m-auto flex-wrap gap-6 justify-center'>
        <Child img={im1} cls='bg-slate-500 ' name='Adamjohnson' job='Developer'/>
        <Child img={im1}  name='johnson' job='Developer'/>
        <Child img={im1} cls='bg-slate-500 ' name='john' job='Developer'/>
        <Child img={im1}  name='Adamjohnson' job='Developer'/>
        <Child img={im1} cls='bg-slate-500 ' name='johnson' job='Developer'/>
        <Child img={im1}  name='john' job='Developer'/>
      
    </div>
  )
}

export default Parent
