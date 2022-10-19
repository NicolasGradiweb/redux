import { useEffect, useState } from "react"
import useClickOutside from "../../hooks/useClickOutside";
import "../../styles/comment.css";

const Comment = ({ callback , postId }) => {
  const [transition, setTransition] = useState('');
  const [comments, setComments] = useState([1,2,3,4,5]);
  const closeNode = useClickOutside(() => callback(true))

  useEffect(() => {
    setTransition('show');
    return () => setTransition('')
  }, [])
  
  useEffect(() => {
    
  }, [postId])
  
  return (
    <div className={`fade ${transition}`}>
      <section className='comment' ref={closeNode}>
        {comments.map(comment => (
          <p>This is a comment</p>
        ))}
      </section>
    </div>
  )
}

export default Comment