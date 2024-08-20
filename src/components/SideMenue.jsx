import Chats from "./Chats";
import SearchBar from "./SearchBar";


export default function SideMenue(props) {



  return <>

  <div className="Side col-3 overflow-auto bg-light p-3 mx-3 d-flex flex-column  gap-2 align-items-center border border-secondary">
  <SearchBar></SearchBar>
{
  props.Friends.map((el, i) =>
  {
    return (<Chats key={i} User={el.user_name} status={el.user_status} User_id={i}/>)
  })
}

  </div>
  </>
}
