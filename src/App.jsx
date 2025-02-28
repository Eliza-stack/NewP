import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import PostList from "./components/PostMassive/Postlist";
import PostForm from "./components/PostForm/Postform";
import Pagination from "./components/Pagination/Pagination";
import './App.scss';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${(page - 1) * limit}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch(() => toast.error("Ошибка загрузки постов"));
  }, [page]);

  const handleDelete = (id) => {
    fetch(`https://dummyjson.com/posts/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
        toast.success("Пост удален!");
      })
      .catch(() => toast.error("Ошибка при удалении поста"));
  };

  const handleAddPost = (newPost) => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts([data, ...posts]);
        toast.success("Пост добавлен!");
      })
      .catch(() => toast.error("Ошибка при добавлении поста"));
  };

  return (
    <div className="container">
      <h1>Список постов</h1>
      <PostForm onAdd={handleAddPost} />
      <PostList posts={posts} onDelete={handleDelete} />
      <Pagination page={page} setPage={setPage} />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
