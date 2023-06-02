import React from 'react'
import Card from './Card'

const Cardfile = ({data }) => {
  console.log(data)
  return (
    <ol style={{display:'flex',flexWrap:"wrap" ,justifyContent:"space-around", padding:"10px"}}>
      {data.map((item,index)=>(
        <li key={index} ><Card data={item}/></li>
      ))}
    </ol>
  )
}

export default Cardfile