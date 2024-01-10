import HeaderGlob from "../Components/Headers/HeaderGlob";
import Aside from "../Components/Aside/Aside";
import { useCategoryFetch } from "../hook/category/GetCategory";
import { User } from "../hook/UserData";
import { useState } from "react";
import FormQuill from "../Components/FormQuill/FormQuill";

export default function Questions() {
  const { userData } = User();

  const { Filter } = useCategoryFetch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");

  const handleCategoryChange = (categoryValue) => {
    setSelectedCategory(categoryValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/Questions/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Title: questionTitle,
          Body: questionBody,
          IdUser: userData.id,
          IdCategories: selectedCategory,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Question created successfully:", data.question);
      } else {
        console.error("Question creation failed:", data.message);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <div>
      <HeaderGlob />
      <section className="flex">
        <div className="md:flex-[24%]">
          <Aside />
        </div>
        <div className="flex-[76%]">
          <article className="w-full h-full">
            <section className="flex justify-center flex-col items-center">
              <form
                className="w-[70%] h-[650px] mt-8 bg-white"
                onSubmit={handleSubmit}
              >
                <h3 className="text-[30px] font-normal mt-5 ml-8 font-['Lexend'] leading-snug">
                  Escribe tu Pregunta..{" "}
                </h3>
                <div>
                  <p className="text-[20px] mt-5 ml-8 font-normal font-['Lexend']">
                    Titulo
                  </p>
                  <input
                    className="w-[90%] ml-8 bg-slate-100"
                    type="text"
                    value={questionTitle}
                    onChange={(e) => setQuestionTitle(e.target.value)}
                  />
                </div>
                <div>
                  <p className="text-[20px] font-normal ml-8 mt-3 font-['Lexend']">
                    Cuerpo
                  </p>
                  <div className="px-8">
                    <FormQuill
                      value={questionBody}
                      onChange={setQuestionBody}
                    />
                  </div>
                </div>
                <div className="mt-16">
                  <p className="text-[20px]  ml-8 font-normal font-['Lexend'] ">
                    Categoria
                  </p>
                  <section className="">
                    <div className="">
                      <select
                        className="w-[90%] ml-8 bg-slate-200"
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                      >
                        <option value="" disabled>
                          Selecciona una categoría
                        </option>
                        {Filter.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.Categorie}
                          </option>
                        ))}
                      </select>
                    </div>
                  </section>
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    className="mr-10 bg-[#9DD3DF] px-3 py-1 rounded-lg"
                    type="submit"
                  >
                    Crear Pregunta
                  </button>
                </div>
              </form>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
