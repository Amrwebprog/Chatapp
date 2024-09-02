import React from 'react'

export default function MyMsg({ Message }) {
  return (
    <div className="bg-primary d-flex justify-content-start align-items-start flex-wrap text-break Msg p-2">
      <h5>{Message}</h5>
    </div>
  )
}
