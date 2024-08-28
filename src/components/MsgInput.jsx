import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useRef } from 'react'
import { NavContext } from './Context'

export default function MsgInput() {
  const msgInput = useRef()
  const { activeUser, setActiveUser, getAllMsg, allMsg, setAllMsg } =
    useContext(NavContext)

  useEffect(() => {
    getAllMsg()
  }, [])

  return (
    <div className="col-12 position-relative chatinput">
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
