import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
  return (
    <section className='search'>
      <div className="secContainer container">
        <h3 className="title">
          Which vehivle you are looking for?
        </h3>

        <div className="searchDiv grid">
          <input type="text" placeholder='Type' />
          <input type="number" placeholder='Year' />
          <input type="text" placeholder='Model' />
          <input type="number" placeholder='Price' />
          <button className="btn primaryBtn flex">
            <FontAwesomeIcon className='icon' icon={faSearch} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Search