import React from 'react'

const TechCard = ({className,context,}) => {
  return (
     <span className={className}>{context}</span>
  )
}

export default TechCard