import { collection, onSnapshot, query, where } from 'firebase/firestore'

import { createContext, useState } from 'react'
import { db } from '../firebase'
const NavContext = createContext()

const NavProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [activeUser, setActiveUser] = useState(0)
  const [Mymsg, setMymsg] = useState([])
  const [friendMsg, setFriendMsg] = useState()
  const [allMsg, setAllMsg] = useState([])
  const LifeChat = () => {
    setLoading(true)
    const q = query(
      collection(db, 'messages'),
      where('reciver_id', '==', activeUser.toString())
    )
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const Msg = []
      querySnapshot.forEach((doc) => {
        Msg.push(doc.data())
      })
      setMymsg(Msg)
      setLoading(false)
    })
  }
  const getAllMsg = () => {
    const q = query(collection(db, 'messages'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const allMsgarr = []
      querySnapshot.forEach((doc) => {
        allMsgarr.push(doc.data())
      })

      setAllMsg(allMsgarr)
    })
  }

  return (
    <NavContext.Provider
      value={{
        activeUser,
        setActiveUser,
        users,
        setUsers,
        Mymsg,
        setMymsg,
        friendMsg,
        setFriendMsg,
        LifeChat,
        loading,
        setLoading,
        allMsg,
        setAllMsg,
        getAllMsg,
      }}
    >
      {children}
    </NavContext.Provider>
  )
}

export { NavContext, NavProvider }
