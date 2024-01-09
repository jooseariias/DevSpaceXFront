import React, { useState, useEffect } from "react";
import Aside from "../Components/Aside/Aside";
import CreateP from "../Components/HeaderCreatePre/CreateP";
import HeaderGlob from "../Components/Headers/HeaderGlob";
import CardQuestions from "../Components/Cards/CardQuestions";
import { useSearch } from "../hook/Home/HookSearch";
import FilterQuestions from "../Components/FilterCuestion/FilterQuestions";

export default function Home() {
  const { searchResults, handleSearch } = useSearch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        let apiUrl = `http://localhost:3001/api/Questions/all?page=${currentPage}&pageSize=10`;

        if (selectedCategory !== null) {
          apiUrl += `&category=${selectedCategory}`;
        }

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Error al obtener preguntas: ${response.statusText}`);
        }

        const data = await response.json();
        setQuestions(data.questions);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, [selectedCategory, currentPage]);

  const handleCategoryFilterChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reiniciar a la primera página cuando se cambia la categoría
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <HeaderGlob onSearch={handleSearch} />
      <section className="flex ">
        <div className="md:flex-[24%] ">
          <Aside onCategoryFilterChange={handleCategoryFilterChange} />
        </div>
        <div className="flex-[76%]">
          {searchResults.length > 0 ? (
            <div>
              <h2 className="font-semibold text-xl mt-2 ml-4">
                Resultados de la búsqueda:
              </h2>
              <div className="flex flex-col mt-4 justify-center items-center">
                {searchResults.map((question) => (
                  <CardQuestions key={question.id} question={question} />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <CreateP />
              {/* <FilterQuestions /> */}
              <div>
                {/* <h2 className="font-semibold text-xl mt-2 ml-4">
                  Resultados de la búsqueda por categoría:
                </h2> */}
                <div className="flex flex-col mt-4 justify-center items-center">
                  {questions.map((question) => (
                    <CardQuestions key={question.id} question={question} />
                  ))}
                </div>
                <div className="flex justify-center mb-10 mt-4">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageChange(index + 1)}
                      className={`mx-2 ${
                        currentPage === index + 1 ? "font-bold  text-slate-400" : ""
                      }`}
                    >
                     <div className="bg-white px-3 rounded-lg font-semibold">{index + 1}</div> 
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
