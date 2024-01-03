import Aside from "../Components/Aside/Aside";
import HeaderGlob from "../Components/Headers/HeaderGlob";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function QuestionId() {
  const [question, setQuestion] = useState([]);
  console.log(question, "data");

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/Questions/details/${id}`)
      .then((res) => res.json())
      .then((res) => setQuestion([res])) // Almacena el objeto dentro de un array
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <HeaderGlob />
      <section className="flex">
        <div className="md:flex-[24%]">
          <Aside />
        </div>
        <div className="flex-[76%]">
          {question.map((q) => (
            <div key={q.id}>
              <h2 className=" font-semibold text-[30px] mt-5 ml-12">{q.question.Title}</h2>
              <div className="flex justify-evenly font-semibold mt-8"><p>{q.question.User.NombreUsuario}</p><p>{q.question.Category.Categorie}</p> <p>{q.question.createdAt}</p></div>
              <div className=" border-[1px] mt-4  border-y-slate-300 mx-10"></div>
              <div className="flex justify-center mt-9"><pre className=" px-10 py-10 bg-slate-300 rounded-lg w-[70%]">{q.question.Body}</pre></div>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
