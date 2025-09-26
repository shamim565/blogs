import { useState } from "react";
import "./App.css";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

function App() {
  const [posts, setPosts] = useState([]);
  const [activeView, setActiveView] = useState("list");
  const [editingPost, setEditingPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSavePost = (post) => {
    setPosts([...posts, post]);
    setActiveView("list");
  };

  const handleNewPost = () => {
    setEditingPost(null);
    setActiveView("form");
  };

  const handleCancelForm = () => {
    setEditingPost(null);
    setActiveView("list");
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setActiveView("form");
  };

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query)
    );
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">My Blog</h1>
        <nav className="app-nav">
          <button
            className={`nav-btn ${activeView === "list" ? "active" : ""}`}
            onClick={() => {
              setActiveView("list");
            }}
          >
            All Posts
          </button>
          <button
            className={`nav-btn ${activeView === "form" ? "active" : ""}`}
            onClick={handleNewPost}
          >
            New Post
          </button>
        </nav>
        {activeView === "list" && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Search posts by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        )}
      </header>

      <main className="app-main">
        {activeView === "form" ? (
          <BlogForm
            post={editingPost}
            onSave={handleSavePost}
            onCancel={handleCancelForm}
          />
        ) : (
          <BlogList
            posts={filteredPosts}
            onEdit={handleEditPost}
            onDelete={handleDeletePost}
            searchQuery={searchQuery}
          />
        )}
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
