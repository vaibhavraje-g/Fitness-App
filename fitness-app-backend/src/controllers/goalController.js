// goalController.js

// Import necessary modules and dependencies (e.g., database models)
const Goal = require("../models/Goal"); // Assuming you have a Goal model

// Set a goal for the user
exports.setGoal = async (req, res) => {
  try {
    const { goalType, target } = req.body;

    // Create a new goal for the user
    const newGoal = new Goal({ user: req.user.id, goalType, target });

    // Save the goal to the database
    await newGoal.save();

    // Send a success response
    res.status(201).json({ message: "Goal set successfully" });
  } catch (err) {
    console.error("Error setting goal:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get progress of a goal for the user
exports.getProgress = async (req, res) => {
  try {
    // Query the database for the user's goal progress
    const userId = req.user.id;
    const goals = await Goal.find({ user: userId });

    // Calculate progress and send to the client
    // Implement your logic to calculate progress
    const progress = calculateProgress(goals);

    res.json({ goals, progress });
  } catch (err) {
    console.error("Error fetching goal progress:", err);
    res.status(500).json({ message: "Server error" });
  }
};
