import HeaderGlob from "../Components/Headers/HeaderGlob";
import Aside from "../Components/Aside/Aside";

export default function Questions() {
  return (
    <div>
      <HeaderGlob />
      <section className="flex ">
        <div className="md:flex-[24%] ">
          <Aside />
        </div>
        <div className="flex-[76%]">
          <article className="w-full h-full">
            <section className="flex justify-center flex-col items-center">
              <form className="w-[70%] h-[550px] mt-8 bg-white" action="">
                <h3 className=" text-[30px] font-normal mt-5 ml-8 font-['Lexend'] leading-snug">
                  Escribe tu Pregunta..{" "}
                </h3>
                <div>
                  <p className="text-[20px] mt-5 ml-8 font-normal font-['Lexend'] ">
                    Titulo
                  </p>
                  <input className="w-[90%] ml-8 bg-slate-100" type="text" />
                </div>
                <div>
                  <p className="text-[20px] font-normal  ml-8 mt-3 font-['Lexend']">
                    Cuerpo
                  </p>
                  <textarea
                    className="w-[90%] ml-8 h-[200px] bg-slate-100"
                    type="text"
                  />
                </div>
                <div>
                  <p className="text-[20px] ml-8 font-normal font-['Lexend'] ">
                    Categoria
                  </p>
                  <select
                    className="w-[90%] bg-slate-200 ml-8 mt-3"
                    name="categoria"
                    id="categoria"
                  >
                    <option value="tecnologia">Tecnología</option>
                    <option value="deportes">Deportes</option>
                    <option value="musica">Música</option>
                    <option value="ciencia">Ciencia</option>
                    <option value="viajes">Viajes</option>
                  </select>
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    className="mr-10 bg-[#9DD3DF] px-3 py-1  rounded-lg"
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
