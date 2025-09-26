import BlogPost from './BlogPost';

function BlogList({ posts, onEdit, onDelete, searchQuery}) {

  if(posts.length === 0){
    return (
      <div className='blog-list-empty'>
      <h3>No blog posts found</h3>
    </div>
    )
  }

  return (
    <div className="blog-list">
      <h2 className="blog-list-title">
        All Blog Posts ({posts.length})
      </h2>
      <div className="blog-list-grid">
        {posts.map((post) => (
          <BlogPost
            key={post.id}
            post={post}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;