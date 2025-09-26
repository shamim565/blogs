import { useState } from 'react';

function BlogForm({post, onSave, onCancel }) {
  const [title, setTitle] = useState(post ? post.title : '');
  const [author, setAuthor] = useState(post ? post.author : '');
  const [content, setContent] = useState(post ? post.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogPost = {
      id: post? post.id : Date.now(),
      title: title,
      author: author,
      content: content,
      createdAt: post? post.createdAt : new Date().toISOString(),
    };

    onSave(blogPost);
  };

  const handleReset = () => {
    setTitle('');
    setAuthor('');
    setContent('');
  }

  return (
    <div className="blog-form-container">
      <h2 className="blog-form-title">
        Create New Blog Post
      </h2>
      
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            className="form-input"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog post title..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            id="author"
            className="form-input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            id="content"
            className="form-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog post content here..."
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {post ? 'Update Post' : 'Add Post'}
          </button>
          <button type='button' className='btn btn-secondary' onClick={handleReset}>Reset</button>
          <button type="button" className="btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;