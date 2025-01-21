import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./componets/Sidebar";
import Header from "./componets/Header";
import Dashboared from "./componets/Dashboared";
import AddFoodForm from "./componets/AddFoodForm"; 
import AddFoodMenu from "./componets/AddFoodMenu";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboared />} />
            <Route path="/add-food" element={<AddFoodForm />} />
            <Route path="/add-food-menu" element={<AddFoodMenu />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
