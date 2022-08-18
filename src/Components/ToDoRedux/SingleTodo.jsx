import React from 'react'

export default function Singletodo({name,complete}) {

  return (
    <div>
    <span style={{color:complete ? "#AAA" : "#000"}}>{name}</span>
    <button>Toggle</button>
    <button>Delete</button>
    </div>
  )
}

