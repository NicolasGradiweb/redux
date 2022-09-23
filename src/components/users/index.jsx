import React, { useEffect } from 'react'
import TableRow from './TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { getOriginalUsers, initLoadingUsers } from '../../redux/actions/users';

const Users = () => {
  const dispatch = useDispatch();

  const store = useSelector(store => store.usersReducer);
  const { users, loading, error } = store;

  /* Initial loading */
  useEffect(() => {
    dispatch(initLoadingUsers());
    dispatch(getOriginalUsers());
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
    <>
      {
        loading 
        ?
        <p>...Loading</p>
        : error
        ?
        <h2>There was en error</h2>
        :
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
      }
    </>
  )
}

export default Users;