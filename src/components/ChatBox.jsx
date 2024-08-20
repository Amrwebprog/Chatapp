import FriendMsg from './FriendMsg'
import MsgInput from './MsgInput'
import MyMsg from './MyMsg'

export default function ChatBox() {
  return (
    <div className="col-12 d-flex flex-column justify-content-end chatbox card p-3 px-5">
      <div className="d-flex flex-column col-12 gap-5 mb-2 ">
        <div className="d-flex justify-content-start">
          <MyMsg></MyMsg>
        </div>
        <div className="d-flex justify-content-end">
          <FriendMsg></FriendMsg>
        </div>
      </div>
      <MsgInput></MsgInput>
    </div>
  )
}
