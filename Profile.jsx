import React from 'react'

export default function Profile({getAdjective, adjective}) {
  console.log(getAdjective)
  return (
    <div>
      <h1>he is very {adjective}</h1>
    </div>
  )
}
