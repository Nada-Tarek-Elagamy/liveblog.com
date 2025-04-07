import { useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Editor({ user }) {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!content.trim()) return;
    await addDoc(collection(db, "posts"), {
      content,
      timestamp: serverTimestamp(),
      author: user.displayName,
    });
    setContent("");
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full p-2 border rounded"
        rows="5"
        placeholder="Start writing..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
        Publish
      </button>
    </div>
  );
}
