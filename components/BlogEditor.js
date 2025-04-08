"use client";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

export default function BlogEditor({ user }) {
  const [content, setContent] = useState("");

  const handlePost = async () => {
    if (!content.trim()) return;

    try {
      await addDoc(collection(db, "posts"), {
        content,
        author: user.email,
        createdAt: serverTimestamp(),
      });
      setContent("");
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <textarea
        rows={5}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your blog post here..."
        style={{ width: "100%", padding: "10px", fontSize: "1rem" }}
      />
      <button onClick={handlePost} style={{ marginTop: "10px", padding: "10px 20px" }}>
        Post
      </button>
    </div>
  );
}
