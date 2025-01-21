import React, { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import AddFoodMenu from "./AddFoodMenu";

const App = () => {
  // Initialize foodItems as an empty array
  const [foodItems, setFoodItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  // Save or update food item
  const handleSave = (formData) => {
    try {
      if (editingItem) {
        // Update food item if editing
        setFoodItems(foodItems.map(item => item === editingItem ? formData : item));
      } else {
        // Add new food item in JSON format
        setFoodItems([...foodItems, formData]);
      }
      setEditingItem(null); // Reset editing state
    } catch (error) {
      console.error("Error saving food item:", error); // Log any errors
    }
  };

  // Start editing food item
  const handleEdit = (item) => {
    setEditingItem(item);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingItem(null);
  };

  return (
    <div>
      <AddFoodForm
        onSave={handleSave}
        editingItem={editingItem}
        onCancel={handleCancel}
      />
      <AddFoodMenu foodItems={foodItems} onEdit={handleEdit} />
    </div>
  );
};

export default App;
