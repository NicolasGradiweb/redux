import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ linkList }) => {
  return (
    <nav id='menu'>
      {linkList.map(link => (
        <Link 
          key={link.id} 
          to={link.link}
        >{link.text}</Link>
      ))}
    </nav>
  )
}

export default Menu