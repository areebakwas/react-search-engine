import React, { useState } from "react";

export default function Search() {
  let [city, citySearch] = useState("");
  let [message, setMessage] = useState("");

  function searchSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 20°C in ${city}`);
  }
  function updateSearch(event) {
    citySearch(event.target.value);
  }

  return (
    <div className="Search">
        <h1>React Search Engine</h1>
      <form onSubmit={searchSubmit}>
        <input
          type="search"
          placeholder="Type a city"
          onChange={updateSearch}
        />
        <input type="submit" value="Submit" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
