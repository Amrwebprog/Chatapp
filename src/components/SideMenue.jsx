import Chats from './Chats'
import SearchBar from './SearchBar'

export default function SideMenue(props) {
  let userinfo = JSON.parse(localStorage.getItem('user'))

  return (
    <>
      <div
        id="Side"
        className=" mybg col-3 overflow-auto p-3 mx-3 d-flex flex-column  gap-2 align-items-center overflow-scroll "
      >
        <SearchBar></SearchBar>
        {props.Friends.map((el, i) => {
          if (el.id === userinfo[0].user_id) {
            null
          } else {
            return (
              <Chats
                key={i}
                User={el.user_name}
                status={el.user_status}
                User_id={i}
              />
            )
          }
        })}
      </div>
    </>
  )
}
