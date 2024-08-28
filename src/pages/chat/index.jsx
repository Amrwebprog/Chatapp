import { collection, getDocs } from 'firebase/firestore'
import { useContext, useEffect } from 'react'
import ChatBox from '../../components/ChatBox'
import { NavContext } from '../../components/Context'
import SideMenue from '../../components/SideMenue'
import WorkSpaceNav from '../../components/WorkSpaceNav'
import { db } from '../../firebase'
import './index.scss'

export default function ChatPage() {
  const { users, setUsers } = useContext(NavContext)

  const getdata = async () => {
    let arr = []
    const querySnapshot = await getDocs(collection(db, 'users'))
    querySnapshot.forEach((doc) => {
      let obj = doc.data()
      obj.id = doc.id
      arr.push(obj)
    })

    setUsers(arr)
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <>
      <div className="backgroundimg col-12 h-100 d-flex align-items-center justify-content-center">
        <div
          className="content d-flex flex-row col-8 align-items-center justify-content-center"
          id="forHeight"
        >
          <SideMenue Friends={users} />

          <div className="d-flex flex-column gap-2 col-8 mybg" id="chatcontent">
            <WorkSpaceNav NavSelector={users} />
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  )
}
