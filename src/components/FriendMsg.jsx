import React from 'react'

export default function FriendMsg({ Message }) {
  return (
    <div className="bg-warning d-flex justify-content-end align-items-end flex-wrap text-break Msg p-2">
      <h5>{Message}</h5>
    </div>
  )
}
