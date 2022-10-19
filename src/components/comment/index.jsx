import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import useClickOutside from "../../hooks/useClickOutside";
import { cleanComments, initLoadingComments, setPostComments } from "../../redux/actions/comments";
import "../../styles/comment.css";
import Error from "../common/Error";
import Loader from "../common/Loader";

const Comment = ({ callback , postId }) => {
  const dispatch = useDispatch();
  const { 
    comments,
    loading,
    error
  } = useSelector(store => store.commentsReducer);

  const [transition, setTransition] = useState('');
  const closeNode = useClickOutside(() => callback(true))

  useEffect(() => {
    setTransition('show');
    return () => setTransition('')
  }, [])
  
  useEffect(() => {
    if(!postId) return;

    dispatch(initLoadingComments())
    dispatch(setPostComments(postId))

    return () => dispatch(cleanComments())
  }, [postId])
  
  return (
    <div className={`fade ${transition}`}>
      <section className='comment' ref={closeNode}>
        <h2>Comments</h2>
        {
          loading 
          ? <Loader />
          : error
          ? <Error error={error} />
          : comments.map(comment => (
            <p key={comment.id}>{comment.body}</p>
          ))
        }
      </section>
    </div>
  )
}

export default Comment