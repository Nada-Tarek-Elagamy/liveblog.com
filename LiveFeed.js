import { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function LiveFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  return (
    <div className="p-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 mb-2 rounded">
          <p>{post.content}</p>
          <small>— {post.author}</small>
        </div>
      ))}
    </div>
  );
}
