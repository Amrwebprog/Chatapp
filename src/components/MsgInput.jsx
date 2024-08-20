import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MsgInput() {
  return (
    <div className="col-12 position-relative ">
      <input type="text" className="col-12 msgInput px-5 " name="" id="" />
      <div className="SendMsg position-absolute start-0 top-0 px-3  bg-dark">
        <FontAwesomeIcon className="text-white" icon={faPaperPlane} />
      </div>
    </div>
  )
}
