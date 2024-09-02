import { collection, getDocs } from 'firebase/firestore'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ChatBox from '../../components/ChatBox'
import { NavContext } from '../../components/Context'
import SideMenue from '../../components/SideMenue'
import WorkSpaceNav from '../../components/WorkSpaceNav'
import { db } from '../../firebase'
import './index.scss'

export default function ChatPage() {
  const navigate = useNavigate()
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
    let loginStatuts = JSON.parse(localStorage.getItem('user'))
    !loginStatuts ? navigate('/loginorregister') : null
  }, [])

  return (
    <>
      <div className="backgroundimg col-12 h-100 d-flex align-items-center justify-content-center position-relative">
        <div className="position-absolute top-0 end-50">
          <button
            onClick={() => {
              localStorage.removeItem('user')
              navigate('/loginOrRegister')
            }}
            className="btn btn-dark"
          >
            logout
          </button>
        </div>
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
