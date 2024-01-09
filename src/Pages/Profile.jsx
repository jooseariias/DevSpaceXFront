import React, { useState, useEffect } from "react";
import HeaderGlob from "../Components/Headers/HeaderGlob";
import Aside from "../Components/Aside/Aside";
import UserProfile from "../Components/UserProfile/UserProfile";
import CardQuestions from "../Components/Cards/CardQuestions";

export default function Profile() {
  const [questions, setQuestions] = useState([]);
  const [visibleQuestions, setVisibleQuestions] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const itemsPerLoad = 9;
  const [loadedQuestions, setLoadedQuestions] = useState(itemsPerLoad);

  useEffect(() => {
    fetch("http://localhost:3001/api/Questions/get/1")
      .then((res) => res.json())
      .then((res) => {
        setQuestions(res.questions || []);
        loadMoreQuestions(); // Cargar las primeras 9 preguntas
      })
      .catch((error) => console.error(error));
  }, []);

  const loadMoreQuestions = () => {
    const newVisibleQuestions = questions.slice(0, loadedQuestions);
    setVisibleQuestions(newVisibleQuestions);

    if (loadedQuestions < questions.length) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  const handleShowMore = () => {
    setLoadedQuestions((prev) => prev + itemsPerLoad);
  };

  useEffect(() => {
    loadMoreQuestions(); // Actualizar visibleQuestions cuando se cambia loadedQuestions
  }, [loadedQuestions, questions]);

  return (
    <div>
      <HeaderGlob />
      <section className="flex">
        <div className="md:flex-[24%]">
          <Aside />
        </div>
        <div className="flex-[76%]">
          <UserProfile />
          <div className="flex justify-center">
            <section className="w-[90%]">
              {visibleQuestions.map((question) => (
                <CardQuestions key={question.id} question={question} />
              ))}
              {showMore && (
                <div className="flex justify-center ">
                  {" "}
                  <button
                    className="mt-4 p-2 hover:bg-slate-200 font-semibold text-black rounded"
                    onClick={handleShowMore}
                  >
                    Ver más
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
