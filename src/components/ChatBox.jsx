import { doc, setDoc } from 'firebase/firestore'
import { useContext, useEffect, useRef, useState } from 'react'
import { db } from '../firebase/index'
import { NavContext } from './Context'
import FriendMsg from './FriendMsg'

export default function ChatBox() {
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const { activeUser, Mymsg, setMymsg, LifeChat, loading, allMsg } =
    useContext(NavContext)

  const [newMessage, setNewMessage] = useState('')
  const msgInput = useRef()

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      setMymsg([...Mymsg, { message: newMessage }])

      const indexnumber = allMsg.length + 1
      await setDoc(doc(db, 'messages', indexnumber.toString()), {
        message: newMessage,
        reciver_id: activeUser.toString(),
        sender_id: userInfo[0].user_id,
      })

      setNewMessage('')
      LifeChat()
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    LifeChat()
  }, [])

  return (
    <div className="chatcontainer d-flex flex-column flex-grow-1">
      <div className="col-12 d-flex flex-column card p-3 px-5 mybg chatbox flex-grow-1">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="d-flex flex-column-reverse col-12 gap-5 mb-2 chatboox overflow-auto flex-grow-1">
            <div className="d-flex justify-content-start flex-column gap-2">
              {allMsg.map((el, index) => {
                if (
                  (el.sender_id === userInfo[0].user_id.toString() &&
                    el.reciver_id === activeUser.toString()) ||
                  (el.sender_id === activeUser.toString() &&
                    el.reciver_id === userInfo[0].user_id.toString())
                ) {
                  if (el.sender_id === userInfo[0].user_id.toString()) {
                    return <Mymsg key={index} Message={el.message} />
                  } else if (el.reciver_id === userInfo[0].user_id.toString()) {
                    return <FriendMsg key={index} Message={el.message} />
                  }
                }
                return null
              })}
            </div>
          </div>
        )}
        <div className="d-flex mt-2">
          <textarea
            ref={msgInput}
            className="form-control flex-grow-1"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            rows="1"
          ></textarea>
          <button className="btn btn-primary ml-2" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
