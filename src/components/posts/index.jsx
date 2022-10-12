import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { cleanPosts, getUserPost, initLoadingPosts } from '../../redux/actions/posts';
import { getOriginalUsers, initLoadingUsers } from '../../redux/actions/users';
import Error from '../common/Error';
import Loader from '../common/Loader';

const Posts = () => {
  const { key } = useParams();
  const dispatch = useDispatch();
  const [
    { 
      users ,
      loading: usersLoading,
      error: usersError
    },
    { 
      posts ,
      loading: postsLoading,
      error: postsError
    }
  ] = useSelector(store => [store.usersReducer, store.postsReducer]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const dispatchActions = async() => {
      if(!users.length) {
        await dispatch(initLoadingUsers());
        await dispatch(initLoadingPosts());
      }
  
      dispatch(getOriginalUsers());
      dispatch(getUserPost(key));
    }

    dispatchActions();

    return () => dispatch(cleanPosts())
  }, [])
  
  useEffect(() => {
    if(!users.length) return;

    setUsername(getUserName())
  }, [users])

  const getUserName = () => {
    const user = users.find(({id}) => id === parseInt(key))
    return `Posts from ${user.name}`;
  }

  return (
    <section className='posts'>
      {
        usersLoading || postsLoading 
        ? <Loader />
        :
        <>
        {
          usersError
          ? <Error error={usersError} />
          : <h1>{users.length && username}</h1>
        }
        { 
          postsError
          ? <Error error={postsError} />
          : posts.map(post => (
            <p key={post.id}>{post.body}</p>
          ))
        }
        </>
      }
    </section>
  )
}

export default Posts