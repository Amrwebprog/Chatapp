import { useContext, useEffect } from 'react'
import { NavContext } from './Context'
import FriendMsg from './FriendMsg'
import MsgInput from './MsgInput'
import MyMsg from './MyMsg'

export default function ChatBox() {
  const {
    activeUser,
    setActiveUser,
    Mymsg,
    setMymsg,
    LifeChat,
    loading,
    setLoading,
  } = useContext(NavContext)

  useEffect(() => {
    LifeChat()
  }, [activeUser])

  return (
    <div className="col-12 d-flex flex-column justify-content-end chatbox card p-3 px-5 mybg chatbox-content">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="d-flex flex-column col-12 gap-5 mb-2 chatboox overflow-auto  ">
          <div className="d-flex justify-content-start flex-column gap-2 ">
            {Mymsg.map((el, index) => {
              return <MyMsg key={index} Message={el.message}></MyMsg>
            })}
          </div>
          <div className="d-flex justify-content-end">
            <FriendMsg></FriendMsg>
          </div>
        </div>
      )}
      <MsgInput></MsgInput>
    </div>
  )
}
