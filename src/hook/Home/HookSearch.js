import { useState } from "react";
export const useSearch = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/Questions/search?query=${query}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data.questions);
    } catch (error) {
      console.error("Error searching questions", error.message);
    }
  };

  return { searchResults, handleSearch };
};
