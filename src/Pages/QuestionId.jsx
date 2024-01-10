import Aside from "../Components/Aside/Aside";
import HeaderGlob from "../Components/Headers/HeaderGlob";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateAnswe from "../Components/CreateAnswer/CreateAnswe";
import { User } from "../hook/UserData";

export default function QuestionId() {
  const { userData } = User();

  const [question, setQuestion] = useState([]);
  console.log(question);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/Questions/details/${id}`)
      .then((res) => res.json())
      .then((res) => setQuestion([res]))
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
            <div key={q.id} className="mx-6">
              <h2 className="font-semibold  text-sky-500 mb-4 text-4xl mt-5">
                {q.question.Title}
              </h2>
              <div className="flex justify-between font-semibold mt-4 text-gray-600">
                <p>{q.question.User.NombreUsuario}</p>
                <p>{q.question.Category.Categorie}</p>{" "}
                <p>{q.question.createdAt}</p>
              </div>
              <div className="border-t border-gray-300 mt-4"></div>
              {/* <div className="flex justify-center mt-6">
                <pre className="px-10 py-6 bg-gray-200 rounded-lg w-[70%]">
                  {q.question.Body}
                </pre>
              </div> */}
              <div className=" bg-gray-400" dangerouslySetInnerHTML={{ __html: q.question.Body }}></div>
              <h2 className="text-xl mt-16 font-semibold">Respuestas</h2>
              <div className="border-t border-gray-300 mt-4"></div>
              {q.question.Answers.map((answer) => (
                <div key={answer.id} className="mt-6">
                  <p className="font-semibold">{answer.User.NombreUsuario}</p>
                  <div className="flex justify-center mt-3">
                    <pre className="px-10 py-6 bg-gray-200 rounded-lg w-[70%]">
                      {answer.Body}
                    </pre>
                  </div>
                  <div className="flex justify-end mt-2 text-gray-600">
                    <p>{answer.createdAt}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <section className="mb-20 mt-8">
            <h3 className="text-xl font-semibold ml-6 mb-4">
              Crea Tu Respuesta
            </h3>
            <div className="border-t border-gray-300 mt-4"></div>
            <CreateAnswe questionId={id} idUser={userData?.id} />
          </section>
        </div>
      </section>
    </div>
  );
}
