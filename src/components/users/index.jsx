import React, { useEffect } from 'react'
import TableRow from './TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { getOriginalUsers, initLoadingUsers } from '../../redux/actions/users';
import Loader from '../common/Loader';
import Error from '../common/Error';
import Table from './Table';

const Users = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.usersReducer);

  const { loading, error } = store;

  /* Initial loading */
  useEffect(() => {
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