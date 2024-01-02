import { useState } from "react";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex">
      <input
        className="hidden md:block w-[600px] pl-5 h-[38px] bg-neutral-300 rounded-l-[71px] outline-none  "
        placeholder="Buscar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="h-[38px] bg-neutral-300 rounded-r-[71px] px-3   hover:bg-slate-200 " onClick={handleSearch}>Buscar</button>
    </div>
  );
}
