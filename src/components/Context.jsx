import { collection, onSnapshot, query } from 'firebase/firestore'
import { createContext, useEffect, useState } from 'react'
import { db } from '../firebase'

const NavContext = createContext()

const NavProvider = ({ children }) => {
  const [regType, setRegType] = useState(false)
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [activeUser, setActiveUser] = useState(0)
  const [Mymsg, setMymsg] = useState([])
  const [friendMsg, setFriendMsg] = useState()
  const [allMsg, setAllMsg] = useState([])

  useEffect(() => {
    if (activeUser) {
      LifeChat()
    }
  }, [activeUser])

  const LifeChat = () => {
    setLoading(true)
    const q = query(collection(db, 'messages'))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const Msg = []
      querySnapshot.forEach((doc) => {
        Msg.push(doc.data())
      })
      setAllMsg(Msg)
      setLoading(false)
    })

    return unsubscribe
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
        regType,
        setRegType,
      }}
    >
      {children}
    </NavContext.Provider>
  )
}

export { NavContext, NavProvider }
