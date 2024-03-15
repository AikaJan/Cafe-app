import React, { useState } from "react";
import "./AddFoodForm.css";
import SnackOrBoozeApi from "./Api";

const AddFoodForm = () => {
  const INITIAL_STATE = {
    name: "",
    description: "",
    recipe: "",
    serve: "",
    foodtype: "",
  };
  const [formData, setFormData] = useState({
    INITIAL_STATE,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.foodtype === "drink") {
      await SnackOrBoozeApi.postDrink(formData);
    } else {
      await SnackOrBoozeApi.postSnack(formData);
    }

    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          placeholder="Type Food name..."
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          placeholder="Type Description..."
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          placeholder="Type Recipe..."
          type="text"
          name="recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
        <input
          placeholder="Type Serve..."
          type="text"
          name="serve"
          value={formData.serve}
          onChange={handleChange}
        />
        <select
          onChange={handleChange}
          name="foodtype"
          value={formData.foodtype}
          style={{ width: "90%", margin: "10px" }}
        >
          <option value="snack">Snack</option>
          <option value="drink">Drink</option>
        </select>

        <button style={{ margin: 20 }}> Add new Food</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
