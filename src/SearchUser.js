import React from 'react'

const SearchUser = ({search,setSearch}) => {
  return (

    <form  >
      <div className="form-group bg-blue">
         <label>Search</label> 
          <input className="form-control mt-2 w-50"
            type="text"
            placeholder="Search User"
            name="name" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}

          />
          
      </div>
        
    </form>
  )
}

export default SearchUser