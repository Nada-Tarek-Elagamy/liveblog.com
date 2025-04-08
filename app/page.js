"use client";
import { useState, useEffect } from "react";
import { auth, db } from "../lib/firebaseConfig";
import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";
console.log("Firestore instance:", db);
const q = query(collection(db,"posts"));
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  getDoc // ✅ add this here
} from "firebase/firestore";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const HomePage = () => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [editContent, setEditContent] = useState("");


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  
  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        const adminRef = doc(db, "admins", user.uid);
        const adminSnap = await getDoc(adminRef);
        if (adminSnap.exists()) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      }
    };
    checkAdmin();
  }, [user]);
  
  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        const adminRef = doc(db, "admins", user.email); // or user.email if you saved it by email
        const adminSnap = await getDoc(adminRef);
        setIsAdmin(adminSnap.exists());
      }
    };
    checkAdmin();
  }, [user]);
  

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "posts"),
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
      return () => unsubscribe();
    }
  }, [user]);

  const handlePost = async () => {
    if (content.trim()) {
      await addDoc(collection(db, "posts"), {
        content,
        author: user.email,
        createdAt: new Date()
      });
      setContent("");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
  };

  const handleEdit = (post) => {
    setEditingPost(post.id);
    setEditContent(post.content);
  };

  const handleUpdate = async () => {
    await updateDoc(doc(db, "posts", editingPost), {
      content: editContent
    });
    setEditingPost(null);
    setEditContent("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to Live Blog</h1>

      {user ? (
        <>
          <p className="text-center mb-2 text-gray-700">
  Logged in as: {user.email}
  {isAdmin && <span className="ml-2 px-2 py-1 text-xs bg-yellow-500 text-white rounded">Admin</span>}
</p>

          <div className="text-center mb-6">
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Logout
            </button>
          </div>

          <div className="mb-6">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog post..."
              rows={4}
              className="w-full p-2 border rounded"
            />
            <button onClick={handlePost} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Post
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
            {posts.map(post => (
              <div key={post.id} className="border p-4 mb-4 rounded bg-white shadow">
                <p className="font-semibold text-gray-800">{post.author}</p>
                {editingPost === post.id ? (
                  <>
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full mt-2 p-2 border rounded"
                    />
                    <div className="mt-2">
                      <button
                        onClick={handleUpdate}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingPost(null)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="mt-2 text-gray-700">{post.content}</p>
                    {user.email === post.author && (
                      <div className="mt-2">
                        <button
                          onClick={() => handleEdit(post)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            {isAdmin && (
  <div className="mt-6 text-center">
    <button
      onClick={handleDeleteAllPosts}
      className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded"
    >
      Delete All Posts
    </button>
  </div>
)}
          </div>
        </>
      ) : (
        <>
          <div className="text-center mb-4">
            <button onClick={() => setShowSignUp(true)} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">
              Sign Up
            </button>
            <button onClick={() => setShowSignUp(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
              Sign In
            </button>
          </div>
          {showSignUp ? <SignUp /> : <SignIn />}
        </>
      )}
    </div>
  );
};

export default HomePage;


// This is the main page of your application. It imports and displays the SignUp and SignIn components.
// You can customize the layout and styling as needed.
// The components are displayed side by side using flexbox.
// You can also add more features or components to this page as your application grows.
// Make sure to adjust the import paths based on your project structure.
// This is a simple example to get you started. You can enhance the UI and functionality as needed.
// You can also add routing or navigation to other parts of your application.
// Don't forget to test the sign-up and sign-in functionalities to ensure they work as expected.
// You can also add error handling and loading states for better user experience.
// If you have any questions or need further assistance, feel free to ask.
// This is a simple example to get you started. You can enhance the UI and functionality as needed.
// You can also add routing or navigation to other parts of your application.
// Don't forget to test the sign-up and sign-in functionalities to ensure they work as expected.
// You can also add error handling and loading states for better user experience.
// If you have any questions or need further assistance, feel free to ask.