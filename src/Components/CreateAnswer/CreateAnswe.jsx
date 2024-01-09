import React, { useState } from "react";

export default function CreateAnswe({ questionId, idUser }) {

  const [answerData, setAnswerData] = useState({
    Body: "",
    IdUser: idUser,
    QuestionId: questionId,
  });

  const handleChange = (e) => {
    setAnswerData({
      ...answerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      const response = await fetch("http://localhost:3001/api/Answer/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answerData),
      });
      const data = await response.json();
      setAnswerData({ ...answerData, Body: "" });
    } catch (error) {
      console.error("Error:", error);
     
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="flex flex-col">
          <label className="ml-10 mt-5 text-sm text-gray-600" htmlFor="body">
            Tu Respuesta:
          </label>
          <textarea
            id="body"
            className="w-[80%] ml-10 mt-2 p-2 border border-gray-300 rounded-lg"
            type="text"
            name="Body"
            value={answerData.Body}
            onChange={handleChange}
            placeholder="La solución es..."
            required
          />
          <div className="flex justify-end">
            <button
              className="mr-10 bg-[#9DD3DF] px-4 py-2 rounded-lg mt-4"
              type="submit"
            >
              Crear Respuesta
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
