const express = require("express");
const router = express.Router();

// Import controllers
const authController = require("../controllers/authController");
const mealController = require("../controllers/mealController");
const activityController = require("../controllers/activityController");
const goalController = require("../controllers/goalController");
const mealPlanController = require("../controllers/mealPlanController");
const communityController = require("../controllers/communityController");
const notificationController = require("../controllers/notificationController");

// Define routes and map them to controllers

// Auth routes
router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);

// Meal routes
router.post("/meal/analyze", mealController.analyzeMeal);
router.get("/meal/history", mealController.getMealHistory);

// Activity routes
router.get("/activity", activityController.getActivity);

// Goal routes
router.post("/goal/set", goalController.setGoal);
router.get("/goal/progress", goalController.getProgress);

// Meal plan routes
router.post("/meal-plan", mealPlanController.createMealPlan);
router.get("/meal-plan", mealPlanController.getMealPlan);

// Community routes
router.get("/community/posts", communityController.getPosts);
router.post("/community/post", communityController.createPost);

// Notification routes
router.get("/notifications", notificationController.getNotifications);
router.post("/notifications", notificationController.createNotification);

module.exports = router;
