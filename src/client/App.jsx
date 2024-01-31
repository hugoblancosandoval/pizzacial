import { useState, useEffect } from "react";
import {
  User as UserIcon,
} from "react-feather";

import { Card } from './cards.jsx';
import { Dialog } from './dialog.jsx';
import { UserProfile } from './user_profile.jsx';
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [showUserProfile, setShowOpenUserProfile] = useState(false);
  const [pizzaThought, setPizzaThought] = useState("");

  const fetchPosts = async () => {
    const postsFromServer = await fetch("/posts");
    const data = await postsFromServer.json();
    
    setPosts(data);
  }
  
  // Loading all from the server
  useEffect(() => {    
    fetchPosts().catch((e) => console.error(e));
  }, []);

  const handlePost = async (e) => {
    const newPost =   {
      _poster: 1, // this should be the _actual_ user id, but I don't have it anywhere
      content: pizzaThought,
      liked_by_user: true // Who doesn't like their own posts?
    }

    try {
      await fetch("/new", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost)
      });

      fetchPosts(); // We refresh the list afterwards
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <div className="App"> 
      <UserProfile isOpen={showUserProfile} onClose={() => setShowOpenUserProfile(false) }/>

      <div className="row">
        <section className="col">
          <div className="top-section">
            <h1>Pizzacial -- Here for the Pizza!</h1>
            <a onClick={() => setShowOpenUserProfile(true) }>
              <UserIcon />              
            </a>
          </div>
        </section>
      </div>
      <div className="row">
        <div className="col-10">
          {
            posts.map((post) =>              
              <Card post={post} key={`${post._id}-${post.timestamp}`} />
            )
          }
        </div>
        <div className="col">
          <fieldset>
            <legend>🍕 Pizza thoughts! 🍕</legend>
            <textarea
              id="pizzaThought"
              className="pizza-thought"
              cols="30"
              rows="10"
              placeholder="What's on your pizza mind?"
              value={pizzaThought}
              onChange={(e) => setPizzaThought(e.target.value)}
            ></textarea>

            <button className="button primary post-bttn" onClick={handlePost}>Post it!</button>            
          </fieldset>          
        </div>
      </div>      
    </div>
  );
}

export default App;
