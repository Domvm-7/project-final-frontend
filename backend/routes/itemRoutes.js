//backend/routes/itemRoutes.js
const express = require("express");
const {
  addItem,
  getItems,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateToken, addItem);
router.get("/", authenticateToken, getItems);
router.put("/:id", authenticateToken, updateItem);
router.delete("/:id", authenticateToken, deleteItem);

module.exports = router;

const authenticateToken = require("../middleware/authMiddleware");

router.post("/items", authenticateToken, addItem);
