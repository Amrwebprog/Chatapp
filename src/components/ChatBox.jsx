import { doc, setDoc } from 'firebase/firestore'
import { useContext, useEffect, useRef, useState } from 'react'
import { db } from '../firebase/index' // تأكد من استيراد إعدادات Firebase المناسبة
import { NavContext } from './Context'
import FriendMsg from './FriendMsg'
import MyMsg from './MyMsg'

export default function ChatBox() {
  const { activeUser, Mymsg, setMymsg, LifeChat, loading, getAllMsg, allMsg } =
    useContext(NavContext)

  const [newMessage, setNewMessage] = useState('')
  const msgInput = useRef()

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      setMymsg([...Mymsg, { message: newMessage }])

      let indexnumber = allMsg.length
      indexnumber++
      await setDoc(doc(db, 'messages', indexnumber.toString()), {
        message: newMessage,
        reciver_id: activeUser.toString(),
        sender_id: '1',
      })

      setNewMessage('')
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
    getAllMsg()
  }, [activeUser])

  return (
    <div className="chatcontainer d-flex flex-column flex-grow-1">
      <div className="col-12 d-flex flex-column card p-3 px-5 mybg chatbox flex-grow-1">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="d-flex flex-column-reverse col-12 gap-5 mb-2 chatboox overflow-auto flex-grow-1">
            <div className="d-flex justify-content-start flex-column gap-2">
              {Mymsg.map((el, index) => {
                return <MyMsg key={index} Message={el.message}></MyMsg>
              })}
            </div>
            <div className="d-flex justify-content-end">
              <FriendMsg></FriendMsg>
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
