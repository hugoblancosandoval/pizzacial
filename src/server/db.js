const postTemplate = {
  _id: 0,
  _poster: 0,
  timestamp: Date.now(),
  content: "Loren ipsum",
  tags: ["tag1", "tag2", "tag3"],
  likes: 0,
  dislikes: 0,
  liked_by_user: false,
};

const userTemplate = {
  _id: 0, // This one is pretty obvious
  _create: Date.now(), // Since when is this user active
  photo: "", // A URL to where their profile photo is stored
  stats: {
    noOfFriends: 0,
    averageOnlineTime: 0.0,
  },
  location: "",
  friends: [], // Collections of id, maybe better to have a dedicated endpoint to load this on demand,
  status: "",  
}

const db = {
  posts: [],
  users: [],
}

export function getPosts() {
  const amountOfPosts = Math.floor(Math.random() * 30)
  const posts = Array(amountOfPosts).fill(null)

  // Generate some random posts if we do not have them
  if (db.posts.length === 0) {
    console.log("creating");
    db.posts = posts.map((item, idx) => {
      const post = {...postTemplate};

      post._id = Math.floor(Math.random() * 1000);
      post._post = Math.floor(Math.random() * 1000);    
      post.likes = Math.floor(Math.random() * 100);
      post.dislikes = Math.floor(Math.random() * 10);
    
      return post;
    })
  }

  return db.posts;
}

export function createPost(post) {
  const newPost = { ...postTemplate, ...post };
  
  newPost._id = Math.floor(Math.random() * 1000);
  newPost.timestamp = Date.now();

  db.posts.unshift(newPost);
}
