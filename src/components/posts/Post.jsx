const Post = ({ title , body, setCloseComment }) => {
  return (
    <div className="post" onClick={() => setCloseComment(false)}>
      <h2 className="post-title">{ title }</h2>
      <p className="post-text">{ body }</p>
    </div>
  )
}

export default Post