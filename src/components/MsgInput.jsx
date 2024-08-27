import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { doc, setDoc } from 'firebase/firestore'
import { useContext, useEffect, useRef } from 'react'
import { db } from '../firebase'
import { NavContext } from './Context'

export default function MsgInput() {
  const msgInput = useRef()
  const { activeUser, setActiveUser, getAllMsg, allMsg, setAllMsg } =
    useContext(NavContext)

  const setNewMessage = async () => {
    let indexnumber = allMsg.length
    await setDoc(doc(db, 'messages', indexnumber.toString()), {
      message: msgInput.current.value,
      reciver_id: activeUser.toString(),
      sender_id: '1',
    })
    console.log(allMsg.length)
  }

  useEffect(() => {
    getAllMsg()
  }, [])

  return (
    <div className="col-12 position-relative ">
      <input
        ref={msgInput}
        type="text"
        className="col-12 msgInput px-5 "
        name=""
        id=""
      />
      <div className="SendMsg position-absolute start-0 top-0 px-3  bg-dark">
        <FontAwesomeIcon
          onClick={setNewMessage}
          className="text-white"
          icon={faPaperPlane}
        />
      </div>
    </div>
  )
}
