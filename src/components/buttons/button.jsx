import React from 'react'

const Button = ({context,className}) => {
  return (
    <button className={`${className} px-5 py-2.5 rounded-lg`}>
    {context}
      </button>
  )
}

export default Button