import React, { useEffect, useState } from 'react'
import TableRow from './TableRow';

const App = () => {
  const [users, setUsers] = useState([
    {name: 'John', email: 'john@john', link: 'john.com'},
    {name: 'Mary', email: 'mary@mary', link: 'mary.com'},
    {name: 'John', email: 'ewrt@john', link: 'wert.com'},
    {name: 'John', email: 'asfd@john', link: 'sadf.com'},
  ]);

  useEffect(() => {
    setUsers(users => [
      ...users,
      {name: 'Lol', email: 'lol@lol', link: 'lol.com'}
    ])
  }, [])
  

  const setRows = () => (
    users.map(user => (
      <TableRow
        key={user.email}
        name={user.name}
        email={user.email}
        link={user.link}
      />
    ))
  )

  return (
    <table>
      <thead>
        <tr className='row'>
          <th>Name</th>
          <th>Email</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        { setRows() }
      </tbody>
    </table>
  )
}

export default App;
