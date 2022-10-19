import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserPost, initLoadingPosts } from '../../redux/actions/posts';
import { getOriginalUsers, initLoadingUsers } from '../../redux/actions/users';
import Comment from '../comment';
import Error from '../common/Error';
import Loader from '../common/Loader';
import Post from './Post';

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
  const [closeComment, setCloseComment] = useState(true);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const dispatchActions = async() => {
      if(!users.length) {
        await dispatch(initLoadingUsers());
        await dispatch(getOriginalUsers());
      }

      if(!posts[key]) {
        dispatch(initLoadingPosts());
        dispatch(getUserPost(key));
      }
    }

    dispatchActions();
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
    <>
    <section className='posts'>
      {
        usersLoading || postsLoading 
        ? <Loader />
        :
        <>
        {
          usersError
          ? <Error error={usersError} text='users'/>
          : <h1>{users.length && username}</h1>
        }
        { 
          postsError
          ? <Error error={postsError} text='posts'/>
          : posts[key]?.map(post => (
            <Post 
              key={post.id}
              id={post.id}
              title={post.title}    
              body={post.body}    
              setCloseComment={setCloseComment}
              setPostId={setPostId}
            />
          ))
        }
        </>
      }
    </section>
    {
      !closeComment &&
      <Comment callback={setCloseComment} postId={postId}/>
    }
    </>
  )
}

export default Posts

// posts[key].map(post => (
//   <p key={post.id}>{post.body}</p>
// ))