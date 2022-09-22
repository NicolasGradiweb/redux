import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TableRow from './TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, setUsers } from '../../redux/actions/users';

const Users = () => {
  // const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const store = useSelector(store => store.usersReducer);
  const { users } = store;
  console.log(users, '..store')

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  
      if(response.status === 200) {
        dispatch(setUsers([...response.data]));
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

export default Users;