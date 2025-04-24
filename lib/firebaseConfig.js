// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";  
import { getFirestore } from "firebase/firestore";  
import { getAuth } from "firebase/auth";  


const firebaseConfig = {
  apiKey: "AIzaSyD1J7OK_6I6oKYtnc0hfnV2c9ZGtp9QGc0",
  authDomain: "liveblog-com.firebaseapp.com",
  projectId: "liveblog-com",
  storageBucket: "liveblog-com.appspot.com",
  messagingSenderId: "717595142284",
  appId: "1:717595142284:web:0907b592652c8848bf33a9",
  measurementId: "G-YQ61FGR8FJ"
};


const BlogPosts = () => {  
  const [posts, setPosts] = useState([]);  

  useEffect(() => {  
    const unsubscribe = onSnapshot(collection(db, "BlogPost"), (snapshot) => {  
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));  
    });  

    return () => unsubscribe();  
  }, [db]);  

  return (  
    <div>  
      <h1>Blog Posts</h1>  
      {posts.map(post => (  
        <div key={post.id}>{post.content}</div>  
      ))}  
    </div>  
  );  
};  
export const app = initializeApp(firebaseConfig);  
export const db = getFirestore(app);  
export default BlogPosts;  