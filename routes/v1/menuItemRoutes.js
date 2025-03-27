const express = require("express");
const { createMenuItem, getMenuItems, deleteMenuItem } = require("../../controllers/menuItemController");
const asyncHandler = require("../../utils/asyncHandler");

const router = express.Router();

router.post("/create", asyncHandler(createMenuItem));
router.get("/fetch-menu/:menuName", asyncHandler(getMenuItems));
router.delete("/delete-item/:id", asyncHandler(deleteMenuItem))
module.exports = router;