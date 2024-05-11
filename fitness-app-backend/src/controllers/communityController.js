// communityController.js

// Import necessary modules and dependencies (e.g., database models)
const Post = require("../models/Post"); // Assuming you have a Post model

// Get all community posts
exports.getPosts = async (req, res) => {
  try {
    // Query the database for community posts
    const posts = await Post.find().populate("user");

    // Send the posts to the client
    res.json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new community post
exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;

    // Create a new post
    const newPost = new Post({ user: req.user.id, content });

    // Save the post to the database
    await newPost.save();

    // Send a success response
    res.status(201).json({ message: "Post created successfully" });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ message: "Server error" });
  }
};
