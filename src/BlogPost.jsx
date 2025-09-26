function BlogPost({ post, onEdit, onDelete }) {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-Us', {
      year : 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <article className="blog-post">
      <div className="blog-post-header">
        <h2 className="blog-post-title">{post.title}</h2>
        <div className="blog-post-meta">
          <span className="blog-post-author">By {post.author}</span>
          <span className="blog-post-date">{formatDate(post.createdAt)}</span>
        </div>
      </div>
      
      <div className="blog-post-content">
        {post.content}
      </div>

      <div className="blog-post-actions">
        <button className="btn btn-edit" onClick={() => onEdit(post)}>Edit</button>
        <button className="btn btn-delete" onClick={() => onDelete(post.id)}>Delete</button>
      </div>
    </article>
  );
}

export default BlogPost;