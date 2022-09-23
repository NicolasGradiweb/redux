import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getOriginalUsers, initLoadingUsers } from '../../redux/actions/users';
import Error from '../common/Error';
import Loader from '../common/Loader';

const Posts = () => {
  const { key } = useParams();
  const dispatch = useDispatch();
  const { 
    users ,
    loading,
    error
  } = useSelector(store => store.usersReducer);

  useEffect(() => {
    if(users.length) return;

    dispatch(initLoadingUsers());
    dispatch(getOriginalUsers());
  }, [])
  
  const getUserName = () => {
    const user = users.find(({id}) => id === parseInt(key))

    return `Posts from ${user.name}`;
  }

  return (
    <section>
      {
        loading
        ? <Loader />
        : error
        ? <Error error={error} />
        : <h1>{users.length && getUserName()}</h1>
      }
      { key }
    </section>
  )
}

export default Posts