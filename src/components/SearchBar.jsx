import { useState } from "react";

const SearchBar = ({ onSearch }) => {

  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") return;// agr input khaali hai to wapis chly jao
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie ka naam likho..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">Search 🔍</button>
    </form>
  );
};

export default SearchBar;