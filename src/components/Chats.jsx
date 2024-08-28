import { faEarthAmericas, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect } from 'react'
import { NavContext } from './Context'

export default function Chats(props) {
  const { activeUser, setActiveUser, LifeChat } = useContext(NavContext)

  useEffect(() => {}, [activeUser])

  return (
    <>
      <div
        className="card col-12 chat-bg p-3 d-flex align-items-center"
        onClick={() => {
          setActiveUser(props.User_id)
          LifeChat()
        }}
      >
        <FontAwesomeIcon
          className="user-icon rounded-circle p-2"
          icon={faUserTie}
        />
        <div className="user-info d-flex flex-column text-left ml-3">
          <h5 className="m-0">{props.User}</h5>
          <p className="m-0">
            <FontAwesomeIcon
              className={props.status ? 'text-success' : 'text-danger'}
              icon={faEarthAmericas}
            />
          </p>
        </div>
      </div>
    </>
  )
}
