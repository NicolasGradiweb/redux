import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ linkList }) => {
  const filteredList = linkList.filter(link => 
    link.id !== 3  
  )

  return (
    <nav id='menu'>
      {filteredList.map(link => (
        <Link 
          key={link.id} 
          to={link.link}
        >{link.text}</Link>
      ))}
    </nav>
  )
}

export default Menu