import house from "../../assets/aside/casita.svg";
import preg from "../../assets/aside/preguntas.svg";
import users from "../../assets/aside/usuarios.svg";

export default function Aside() {
  return (
    <div>
      <section className="bg-white  min-h-screen ">
        <main>
          <section className="flex justify-center">
            <section className="flex flex-col  items-start pt-10 gap-3">
              <div className="flex items-center gap-3">
                <img className="size-[25px]" src={house} alt="hause" />
                <p className="text-black text-xl font-normal font-['Lexend'] leading-snug">
                  Inicio
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img className="size-[25px]" src={preg} alt="hause" />
                <p className="text-black text-xl font-normal font-['Lexend'] leading-snug">
                  Preguntas
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img className="size-[25px]" src={users} alt="hause" />
                <p className="text-black text-xl font-normal font-['Lexend'] leading-snug">
                  Usuarios
                </p>
              </div>
            </section>
          </section>
          <section className="mt-10">
            <h4 className="text-center text-black text-xl font-normal underline font-['Lexend'] leading-snug">
              Lenguajes
            </h4>
            <section className="flex justify-center">
              <div className="flex flex-col  justify-center  gap-2 mt-5">
                <div className="flex gap-2  items-center">
                  <input
                    className="size-[16px]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p className="text-black text-xl font-normal font-['Lexend'] leading-snug">
                    Javascript
                  </p>
                </div>
                <div className="flex gap-2  items-center">
                  <input
                    className="size-[16px]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p className="text-black text-xl font-normal font-['Lexend'] leading-snug">
                    c++
                  </p>
                </div>
                <div className="flex gap-2  items-center">
                  <input
                    className="size-[16px]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p className="text-black text-xl font-normal font-['Lexend'] leading-snug">
                    Php
                  </p>
                </div>
                <div className="flex gap-2  items-center">
                  <input
                    className="size-[16px]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p className="text-black text-xl font-normal font-['Lexend'] leading-snug">
                    Ruby
                  </p>
                </div>
              </div>
            </section>
          </section>
        </main>
      </section>
    </div>
  );
}