import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-btn">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        type="search"
        className="search-input"
        aria-label="Search"
        placeholder="Search..."
      />
    </div>
  )
}
