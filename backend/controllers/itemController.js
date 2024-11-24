//backend/controllers/itemController.js
const Item = require("../models/Item");

exports.addItem = async (req, res) => {
  try {
    const newItem = new Item({ ...req.body, userId: req.user.id });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Error adding item" });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({ userId: req.user.id });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving items" });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Error updating item" });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting item" });
  }
};
