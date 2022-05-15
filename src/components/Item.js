import React from "react";

const Item = (props) => {
  const { item, onRemoveItem } = { ...props };

  const handleRemoveItem = () => {
    onRemoveItem(item);
  };
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.byline}</span>
      <span>{item.created_date}</span>
      <span>
        <button type="button" onClick={handleRemoveItem}>
          Dismiss
        </button>
      </span>
    </li>
  );
};

export default Item;
