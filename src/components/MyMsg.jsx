import { useContext } from 'react'
import { NavContext } from './Context'

export default function MyMsg(props) {
  const { activeUser, setActiveUser } = useContext(NavContext)

  return (
    <div className="bg-primary d-flex justify-content-start align-items-start flex-wrap text-break Msg p-2">
      <h5>{props.Message}</h5>
    </div>
  )
}
