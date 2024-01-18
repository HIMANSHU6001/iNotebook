import React from 'react'

export default function Alert(props) {
  return (
    <div>
        <div role='alert' className={`alert alert-${props.type}`}>
            {props.message}
        </div>
    </div>
  )
}

