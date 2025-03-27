const MenuItem = require("../models/MenuItem");

exports.createMenuItem = async (req, res) => {
    try {
        const { itemName, price, description, menuName } = req.body;

        // Validate the request
        if (!itemName || !price || !description || !menuName) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new menu item
        const menuItem = new MenuItem({
            name: itemName,
            price,
            description,
            menu: menuName
        });

        // Save the menu item to the database
        await menuItem.save();

        return res.status(201).json({ message: "Menu item created successfully", menuItem });
    } catch (error) {
        console.error("Error creating menu item:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

exports.getMenuItems = async (req, res) => {
    try {
        const { menuName } = req.params; // Extract menu name from params

        // Find all menu items associated with this menu
        const menuItems = await MenuItem.find({ menu: menuName });

        return res.status(200).json({ message: "Menu items fetched successfully", menuItems });
    } catch (error) {
        console.error("Error fetching menu items:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

exports.deleteMenuItem = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the menu item
        const deletedItem = await MenuItem.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        res.status(200).json({ message: "Menu item deleted successfully", deletedItem });
    } catch (error) {
        console.error("Error deleting menu item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};