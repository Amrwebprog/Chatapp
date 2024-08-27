import Chats from './Chats'
import SearchBar from './SearchBar'

export default function SideMenue(props) {
  return (
    <>
      <div
        id="Side"
        className=" mybg col-3 overflow-auto p-3 mx-3 d-flex flex-column  gap-2 align-items-center overflow-auto "
      >
        <SearchBar></SearchBar>
        {props.Friends.map((el, i) => {
          return (
            <Chats
              key={i}
              User={el.user_name}
              status={el.user_status}
              User_id={i}
            />
          )
        })}
      </div>
    </>
  )
}
