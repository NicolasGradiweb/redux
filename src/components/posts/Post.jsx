const Post = ({ title , body }) => {
  return (
    <div className="post">
      <h2 className="post-title">{ title }</h2>
      <p className="post-text">{ body }</p>
    </div>
  )
}

export default Post