// backend/controllers/itemController.js
const Item = require("../models/Item");

exports.addItem = async (req, res) => {
  try {
    const newItem = new Item({ ...req.body, userId: req.user.id });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding item" });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({ userId: req.user.id });
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving items" });
  }
};

exports.updateItem = async (req, res) => {
  try {
    // Only update if the item belongs to the current user
    const item = await Item.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    Object.assign(item, req.body);
    await item.save();
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating item" });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting item" });
  }
};
