export default function CardQuestions({ question }) {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div>
      <div
        className="flex bg-white w-[99%] h-[180px] mt-3 rounded-xl"
        key={question.id}
      >
        <div className="w-[200px] flex flex-col justify-center items-center gap-4">
          <p>
            <spam>{question.Answers.length}</spam> Respuestas
          </p>
          <p> {question.Category.Categorie}</p>
        </div>
        <div className="border-[1px] h-[150px] mt-4"></div>
        <div className="flex flex-col  justify-around">
          <h1 className="pl-10 text-sky-500 text-2xl font-normal font-['Lexend'] leading-snug">
            {question.Title}
          </h1>
          <article className="pl-10  text-black text-xl font-normal font-['Lexend'] leading-snug">
            {truncateText(question.Body, 40)}
          </article>
          <div className="flex justify-end pr-4 gap-2 w-[600px]">
            <p>{question.User.NombreUsuario} </p>{" "}
            <span>{question.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
