
import ChatBox from '../../components/ChatBox'
import { NavProvider } from '../../components/Context'
import SideMenue from '../../components/SideMenue'
import WorkSpaceNav from '../../components/WorkSpaceNav'
import './index.scss'


export default function ChatPage() {
  let data = JSON.parse(localStorage.getItem("users"))

  return (
    <div className='d-flex flex-row col-12'>
<NavProvider>
  <SideMenue Friends={data}/>
    <div className='d-flex flex-column gap-2 col-8'>
  <WorkSpaceNav NavSelector={data}/>
    <ChatBox></ChatBox>
  </div>
  </NavProvider>
  </div>
  )
}
