import React, { useState } from "react";
import "./AddFoodForm.css"; // Import the CSS file

const AddFoodForm = () => {
  const [formData, setFormData] = useState({
    foodMenu: "",
    imageUrl: "",
    quantity: "",
    oldPrice: "",
    newPrice: "",
    description: "",
    addedDate: "",
  });

  const [foodList, setFoodList] = useState([]); // State to store the list of food items
  const [isEditing, setIsEditing] = useState(false); // State to track if an item is being edited
  const [editingIndex, setEditingIndex] = useState(null); // Index of the item being edited

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update the existing item
      const updatedFoodList = [...foodList];
      updatedFoodList[editingIndex] = formData;
      setFoodList(updatedFoodList);
      setIsEditing(false);
      setEditingIndex(null);
      alert("Food item updated successfully!");
    } else {
      // Add a new item
      setFoodList([...foodList, formData]);
      alert("Food item added successfully!");
    }

    // Reset the form
    setFormData({
      foodMenu: "",
      imageUrl: "",
      quantity: "",
      oldPrice: "",
      newPrice: "",
      description: "",
      addedDate: "",
    });
  };

  // Handle editing a food item
  const handleEdit = (index) => {
    setFormData(foodList[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  // Handle deleting a food item
  const handleDelete = (index) => {
    const updatedFoodList = foodList.filter((_, i) => i !== index);
    setFoodList(updatedFoodList);
    alert("Food item deleted successfully!");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{isEditing ? "Edit Food" : "Add Food"}</h2>
      <form onSubmit={handleSubmit} className="food-form">
        <div className="form-group">
          <label>Enter Food Menu:</label>
          <input
            type="text"
            name="foodMenu"
            value={formData.foodMenu}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Food Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Old Price:</label>
          <input
            type="number"
            name="oldPrice"
            value={formData.oldPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>New Price:</label>
          <input
            type="number"
            name="newPrice"
            value={formData.newPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Added Date:</label>
          <input
            type="date"
            name="addedDate"
            value={formData.addedDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            {isEditing ? "Update Food" : "Add Food"}
          </button>
          <button
            type="reset"
            onClick={() =>
              setFormData({
                foodMenu: "",
                imageUrl: "",
                quantity: "",
                oldPrice: "",
                newPrice: "",
                description: "",
                addedDate: "",
              })
            }
            className="reset-button"
          >
            Reset
          </button>
        </div>
      </form>

      {/* Display list of food items */}
      {foodList.length > 0 && (
        <div className="food-list">
          <h2>Food Items</h2>
          <table>
            <thead>
              <tr>
                <th>Food Menu</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Old Price</th>
                <th>New Price</th>
                <th>Description</th>
                <th>Added Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {foodList.map((item, index) => (
                <tr key={index}>
                  <td>{item.foodMenu}</td>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt="Food"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{item.quantity}</td>
                  <td>{item.oldPrice}</td>
                  <td>{item.newPrice}</td>
                  <td>{item.description}</td>
                  <td>{item.addedDate}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddFoodForm;
