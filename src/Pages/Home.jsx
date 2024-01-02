import Aside from "../Components/Aside/Aside";
import FilterQuestions from "../Components/FilterCuestion/FilterQuestions";
import CreateP from "../Components/HeaderCreatePre/CreateP";
import HeaderGlob from "../Components/Headers/HeaderGlob";
import { useState } from "react";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/Questions/search?query=${query}`
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setSearchResults(data.questions);
      } else {
        console.error(`Error: ${response.status} - ${data.message}`);
      }
    } catch (error) {
      console.error("Error searching questions", error);
    }
  };

  return (
    <div>
      <HeaderGlob onSearch={handleSearch} />
      <section className="flex ">
        <div className="md:flex-[24%] ">
          <Aside />
        </div>
        <div className="flex-[76%]">
          {searchResults.length > 0 ? (
            <div>
              {searchResults.length > 0 && (
                <div>
                  <h2>Resultados de la búsqueda:</h2>
                  <ul>
                    {searchResults.map((question) => (
                      <li key={question.id}>{question.Title}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div>
              <CreateP />
              <FilterQuestions />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
