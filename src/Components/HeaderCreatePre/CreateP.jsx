import { Link } from "react-router-dom";

export default function CreateP() {
  return (
    <div>
      <section className="bg-white  min-w-full px-10 flex h-[100px] items-center justify-between">
        <h3 className="text-black text-2xl font-normal font-['Lexend'] leading-snug">
          Todas Las Preguntas...
        </h3>
        <Link to={"/Questions"}>
          <button className=" h-[35px] px-5 bg-[#9DD3DF] rounded-[15px] text-black text-[20px] font-normal font-['Lexend'] leading-snug">
            Crear Preguntas
          </button>
        </Link>
      </section>
    </div>
  );
}
