const DeleteLastItem = ({ onDeleteItem, buttonDisabled }) => {
  return (
    <button onClick={onDeleteItem} disabled={buttonDisabled}>
      Delete Last Item
    </button>
  );
};

export default DeleteLastItem;
