import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchBar() {
  return (
    <div className="col-12 position-relative">
      <div className="Search-btn position-absolute bg-black col-2 h-75 d-flex  align-items-center justify-content-center ">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input type="search" className="col-12 p-2 border-2" />
    </div>
  )
}
