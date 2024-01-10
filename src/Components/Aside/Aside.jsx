import { useCategoryFetch } from "../../hook/category/GetCategory";
import { Link } from "react-router-dom";

import house from "../../assets/aside/casita.svg";
import preg from "../../assets/aside/preguntas.svg";
import users from "../../assets/aside/usuarios.svg";
import lengues from "../../assets/lengues.png";

export default function Aside({ onCategoryFilterChange }) {
  const { Filter } = useCategoryFetch();

  const handleCategoryChange = (category) => {
    onCategoryFilterChange(category);
  };

  return (
    <div>
      <section className="  bg-white h-[2100px]  ">
        <main className=" ">
          <section className="flex justify-center">
            <section className="flex flex-col  items-start pt-10 gap-3">
              <Link to={"/Home"}>
                <div className="flex items-center gap-3">
                  <img className="size-[25px]" src={house} alt="hause" />
                  <p className="text-black text-xl font-normal font-['Lexend'] leading-snug">
                    Inicio
                  </p>
                </div>
              </Link>
              <Link to={"/Profile"}>
                <div className="flex items-center gap-3">
                  <img className="size-[25px]" src={preg} alt="hause" />
                  <p className="text-black text-xl font-normal font-['Lexend'] leading-snug">
                    Mis Preguntas
                  </p>
                </div>
              </Link>
              <Link to={"/Users"}>
                <div className="flex items-center gap-3">
                  <img className="size-[25px]" src={users} alt="hause" />
                  <p className="text-black text-xl font-normal font-['Lexend'] leading-snug">
                    Usuarios
                  </p>
                </div>
              </Link>
            </section>
          </section>
          <section className="mt-10">
            <h4 className="text-center text-black text-xl font-normal underline font-['Lexend'] leading-snug">
              Lenguajes
            </h4>
            <section className="flex justify-center">
              <div className="flex flex-col  justify-center  gap-5 mt-5">
                {Filter?.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center gap-3 cursor-pointer "
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    <img
                      className="size-[25px]"
                      src={lengues}
                      alt="preguntas"
                    />
                    <p className="text-black text-xl font-normal font-['Lexend'] leading-snug">
                      {category.Categorie}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </main>
      </section>
    </div>
  );
}
