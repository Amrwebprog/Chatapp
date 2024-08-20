import { faEarthAmericas, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { NavContext } from "./Context";

export default function Chats(props) {
  const { activeUser, setActiveUser } = useContext(NavContext);

  useEffect(() => {
    console.log('Active User changed:', activeUser);
  }, [activeUser]);

  return (
    <>
      <div className="card col-12 bg-white p-3 d-flex flex-row flex-wrap justify-content-center align-items-center" onClick={()=>
        {
          console.log(props.User_id)
          setActiveUser(props.User_id)
          console.log(activeUser)
        }}>
        <FontAwesomeIcon className="col-2 bg-black rounded-circle p-2" icon={faUserTie} />
        <div className="col-9 d-flex flex-column gap-2 text-center">
          <h5 className="col-12 m-0">{props.User}</h5>
          <p className="m-0">
            {props.status ? (
              <FontAwesomeIcon className="text-success online" icon={faEarthAmericas} />
            ) : (
              <FontAwesomeIcon className="text-danger online" icon={faEarthAmericas} />
            )}
          </p>
        </div>
      </div>
    </>
  );
}
