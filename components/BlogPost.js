"use client";
import { useState } from "react";
import { db } from "../lib/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const BlogPost = ({ user }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        createdAt: serverTimestamp(),
        author: user.email,
      });
      setTitle("");
      setContent("");
      alert("Post added!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <input
        className="border p-2"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2"
        placeholder="Write your blog here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Publish
      </button>
    </form>
  );
};

export default BlogPost;
