/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import PostList from "./components/PostMassive/Postlist";
import PostForm from "./components/PostForm/Postform";
import Pagination from "./components/Pagination/Pagination";
import "./App.scss";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/posts?limit=${limit}&skip=${(page - 1) * limit}`
      );
      setPosts(res.data.posts);
    } catch (error) {
      toast.error("Ошибка загрузки постов");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      toast.success("Пост удален!");
    } catch (error) {
      toast.error("Ошибка при удалении поста");
    }
  };

  const handleAddPost = async (newPost) => {
    try {
      const res = await axios.post("https://dummyjson.com/posts/add", newPost, {
        headers: { "Content-Type": "application/json" },
      });
      setPosts([res.data, ...posts]);
      toast.success("Пост добавлен!");
    } catch (error) {
      toast.error("Ошибка при добавлении поста");
    }
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
