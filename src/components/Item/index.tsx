import React from 'react'
import './item.css'


type Props={
    label:string,
    value:string
}

function Item({label,value}:Props){
  return (
    <div className='container_text'>
    <label>{label}</label>
    <h2>{value}</h2>
    </div>
  )
}

export default Item;