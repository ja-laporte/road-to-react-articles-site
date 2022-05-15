import InputWithLabel from "./components/Search";
import List from "./components/List";
import articles from "./data/news.json";
import React, { useState, useEffect } from "react";

// Custom useState hook to deal with browser remembering the last input item
const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    // store recent search in browser's local storage & load on component initialization
    localStorage.setItem(key, value);
  }, [value, key]);
  // using the use effect to monitor each time value updates, separating the concern away from handleSearch, allows using setValue elsewhere w/o breaking local storage functionality
  return [value, setValue];
};

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "Qui");

  const [stories, setStories] = useState(articles);

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.abstract !== story.abstract
    );
    setStories(newStories);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>News Stories</h1>
      <InputWithLabel
        id="search"
        label="Search"
        onInputChange={handleSearch}
        value={searchTerm}
      />
      <hr />
      <List stories={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
}

export default App;
