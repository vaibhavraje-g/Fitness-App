// notificationController.js

// Import necessary modules and dependencies (e.g., database models)
const Notification = require("../models/Notification"); // Assuming you have a Notification model

// Fetch notifications for the user
exports.getNotifications = async (req, res) => {
  try {
    // Query the database for the user's notifications
    const userId = req.user.id;
    const notifications = await Notification.find({ user: userId });

    // Send the notifications to the client
    res.json(notifications);
  } catch (err) {
    console.error("Error fetching notifications:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a notification for the user
exports.createNotification = async (req, res) => {
  try {
    const { message, type } = req.body;

    // Create a new notification
    const newNotification = new Notification({
      user: req.user.id,
      message,
      type,
    });

    // Save the notification to the database
    await newNotification.save();

    // Send a success response
    res.status(201).json({ message: "Notification created successfully" });
  } catch (err) {
    console.error("Error creating notification:", err);
    res.status(500).json({ message: "Server error" });
  }
};
