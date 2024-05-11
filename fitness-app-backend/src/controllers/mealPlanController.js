// mealPlanController.js

// Import necessary modules and dependencies (e.g., database models)
const MealPlan = require("../models/MealPlan"); // Assuming you have a MealPlan model

// Create a meal plan for the user
exports.createMealPlan = async (req, res) => {
  try {
    const { meals, targetCalories } = req.body;

    // Create a new meal plan for the user
    const newMealPlan = new MealPlan({
      user: req.user.id,
      meals,
      targetCalories,
    });

    // Save the meal plan to the database
    await newMealPlan.save();

    // Send a success response
    res.status(201).json({ message: "Meal plan created successfully" });
  } catch (err) {
    console.error("Error creating meal plan:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get the user's meal plan
exports.getMealPlan = async (req, res) => {
  try {
    // Query the database for the user's meal plan
    const userId = req.user.id;
    const mealPlan = await MealPlan.findOne({ user: userId });

    // Send the meal plan to the client
    res.json(mealPlan);
  } catch (err) {
    console.error("Error fetching meal plan:", err);
    res.status(500).json({ message: "Server error" });
  }
};
