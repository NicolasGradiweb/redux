import React from 'react'

const Menu = ({ linkList }) => {
  return (
    <nav id='menu'>
      {linkList.map(link => (
        <a 
          key={link.id} 
          href={link.link}
        >{link.text}</a>
      ))}
    </nav>
  )
}

export default Menu