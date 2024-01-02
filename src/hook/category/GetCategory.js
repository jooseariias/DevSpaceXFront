import { useEffect, useState } from "react";

export const useCategoryFetch = () => {
  const [Filter, setFilter] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/Categories/get");
        const data = await response.json();
        setFilter(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);
  return { Filter };
};
