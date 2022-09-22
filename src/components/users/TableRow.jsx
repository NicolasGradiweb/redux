import React from 'react'

const TableRow = ({ name, email, link }) => {
  return (
    <tr className='row'>
      <td>{ name }</td>
      <td>{ email }</td>
      <td>{ link }</td>
    </tr>
  )
}

export default TableRow