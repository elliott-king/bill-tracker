import React, {useState} from 'react';
import './Search.css'

const Search = (props) => {
  const [search, setSearch] = useState('');

  const submit = (e) => {
    e.preventDefault()
    console.log('submitted')
    props.setSearchText(search)
  }

  return (
    <div className="search-bar">
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Search by bill title or descrition..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" onClick={submit}>Search</button>
      </form>
    </div>
  )
}

export default Search;