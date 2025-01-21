import React from 'react';
import './FoodMenu.css'; // Optional: You can style the table with a separate CSS file

const AddFoodMenu = ({ foodItems }) => {
  return (
    <div className="food-menu-container">
      <h2>Food Menu</h2>
      <table className="food-menu-table">
        <thead>
          <tr>
            <th>Food Menu</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Old Price</th>
            <th>New Price</th>
            <th>Description</th>
            <th>Added Date</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.length > 0 ? (
            foodItems.map((item, index) => (
                
              <tr key={index}>
                <td>{item.foodMenu}</td>
                <td><img src={item.imageUrl} alt={item.foodMenu} className="food-image" /></td>
                <td>{item.quantity}</td>
                <td>{item.oldPrice}</td>
                <td>{item.newPrice}</td>
                <td>{item.description}</td>
                <td>{item.addedDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No food items available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AddFoodMenu;
