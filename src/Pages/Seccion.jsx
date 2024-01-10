import HeaderSecion from "../Components/Headers/HeaderSecion";
import GoogleAuth from "../Utils/GoogleAuth";
import dev from "../assets/dev.svg";

export default function Seccion() {
  return (
    <div className="">
    <HeaderSecion />
    <section className="flex justify-center items-center  mt-10">
      <article className="flex flex-col justify-center bg-white w-1/2 p-8 rounded-lg shadow-lg">
        <div>
          <img className="w-48 h-48 mx-auto" src={dev} alt="icono developer" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">¡Bienvenido a DevSpaceX!</h2>
          <p className="text-gray-700 mb-4">
            Conecta con otros desarrolladores, comparte tus conocimientos y aprende
            de la comunidad. Únete ahora.
          </p>
          <div className="flex justify-center">
          <GoogleAuth />
          </div>
         
        </div>
      </article>
    </section>
  </div>
  );
}
