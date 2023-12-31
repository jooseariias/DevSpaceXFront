export default function FilterQuestions() {
  return (
    <div>
      <nav className="bg-white h-[60px] items-center flex justify-end pr-[80px]">
        <section className="flex bg-slate-300 rounded-[20px] px-5 h-8 items-center">
          <div>
            <button className="text-black text-xl font-normal font-['Lexend'] leading-snug">
              Recientes
            </button>
          </div>
          <div className=" border-[1px] h-[25px] border-gray-500 ml-2 mr-2"></div>
          <div>
            <button className="text-black text-xl font-normal font-['Lexend'] leading-snug">
              Sin Responder
            </button>
          </div>
          <div className=" border-[1px] h-[25px] border-gray-500 ml-2 mr-2"></div>
          <div>
            <button className="text-black text-xl font-normal font-['Lexend'] leading-snug">
              Mas Respondidas
            </button>
          </div>
        </section>
      </nav>
    </div>
  );
}
