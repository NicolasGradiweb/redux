import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TableRow from './TableRow';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  
      if(response.status === 200) {
        setUsers([...response.data])
      }
    }

    fetchData();
  }, [])
  

  const setRows = () => (
    users.map(user => (
      <TableRow
        key={user.id}
        name={user.name}
        email={user.email}
        link={user.website}
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
