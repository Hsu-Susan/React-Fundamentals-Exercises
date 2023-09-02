import { useState } from "react";
const CreateNewItem = ({ onAddNewItem }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    onAddNewItem(value);
    setValue("");
  };

  const inputIsEmpty = () => value === "";

  return (
    <form onSubmit={addItem}>
      <input
        type="text"
        placeholder="Enter New Item"
        value={value}
        onChange={handleChange}
      />
      <button disabled={inputIsEmpty()}>Add</button>
    </form>
  );
};

export default CreateNewItem;
