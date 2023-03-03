import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() =>props.greethandler('child')}>greetparent</button>
    </div>
  )
}

export default ChildComponent
