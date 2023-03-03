import React from 'react'

function Person({Person}) {
  return (
    <div>
      I am {Person.name}. I am {Person.age} years old. I know {Person.skill}
    </div>
  )
}

export default Person