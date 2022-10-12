import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOriginalUsers, initLoadingUsers } from '../../redux/actions/users';
import Loader from '../common/Loader';
import Error from '../common/Error';
import Table from './Table';

const Users = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.usersReducer);

  const { users, loading, error } = store;

  /* Initial loading */
  useEffect(() => {
    if(users.length) return;
    dispatch(initLoadingUsers());
    dispatch(getOriginalUsers());
  }, [])
  
  return (
    <>
      {
        loading 
        ? <Loader />
        : error
        ? <Error error={error} />
        : <Table />
      }
    </>
  )
}

export default Users;