import PropTypes from "prop-types";
import Item from "./Item";
const ItemList = ({ items }) => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ol>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array,
};

export default ItemList;
