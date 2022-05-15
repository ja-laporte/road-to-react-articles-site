import React from "react";
import Item from "./Item";

const List = (props) => {
  const { stories, onRemoveItem } = props;
  return (
    <div>
      <h1>List of Articles</h1>
      <ul>
        {stories.map((item, index) => (
          <Item key={index} item={item} onRemoveItem={onRemoveItem} />
        ))}
      </ul>
    </div>
  );
};

export default List;
