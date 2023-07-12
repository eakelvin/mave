import React, { useState } from 'react'

function Searchbar() {
    const [query, setQuery] = useState('')

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('gbemiii');
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                value={query}
                onChange={handleChange} 
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
  )
}

export default Searchbar
