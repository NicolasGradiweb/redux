const Post = ({ id, title , body, setCloseComment, setPostId }) => {
  const handlePostClick = () => {
    setCloseComment(false);
    setPostId(id);
  }

  return (
    <div className="post" onClick={handlePostClick}>
      <h2 className="post-title">{ title }</h2>
      <p className="post-text">{ body }</p>
    </div>
  )
}

export default Post