import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'> Let's Talk</span>
      <div className='user'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlLRk4AqTa38TsuKbK71xEhCGvr4KYexpH9TiD10&s" alt="" />
        <span> Meghana </span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
