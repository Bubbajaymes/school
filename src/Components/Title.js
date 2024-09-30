import React from 'react'

export default function Title({subTitle, title}) {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}
