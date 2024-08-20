import { faCamera, faGear, faImage, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavContext } from "./Context";

export default function WorkSpaceNav(props) {
  const {activeUser, setActiveUser} = useContext(NavContext)
  return (
    <div className="col-12  p-3 d-flex flex-row justify-content-between   border border-secondary ">
      <div className=" d-flex flex-row flex-wrap gap-4 align-content-center  ">
       <FontAwesomeIcon className="bg-black rounded-circle p-2" icon={faUserTie} />
        <div className="d-flex flex-column gap-1 text-center align-items-center ">
        <h5 className="col-12 m-0">{props.NavSelector[activeUser].user_name}</h5>
        <p className="m-0">left in 0 min</p>
        </div>
       </div>
       <div className="d-flex flex-row align-items-center justify-content-center gap-3">
        <div className=""><FontAwesomeIcon  className="text-danger" icon={faCamera} /></div>
        <div><FontAwesomeIcon className="text-danger" icon={faImage} /></div>
        <div><FontAwesomeIcon className="text-danger" icon={faGear} /></div>
        <div></div>
       </div>
    </div>
  )
}
