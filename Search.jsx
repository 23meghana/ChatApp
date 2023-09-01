import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find your friend'/>
      </div>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlLRk4AqTa38TsuKbK71xEhCGvr4KYexpH9TiD10&s" alt="" />
        <div className="userChatInfo">
          <span>Tanuja</span>
        </div>
      </div>
    </div>
  )
}

export default Search
