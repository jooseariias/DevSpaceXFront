import HeaderSecion from "../Components/Headers/HeaderSecion";
import GoogleAuth from "../Utils/GoogleAuth";
import dev from "../assets/dev.svg";

export default function Seccion() {
  return (
    <div>
      <HeaderSecion />
      <section className="flex justify-center ">
        <article className="flex flex-col  justify-around bg-white w-[50%] h-[400px] items-center mt-10">
          <div>
            <img
              className="w-[300px] h-[300px]"
              src={dev}
              alt="icono developer"
            />
          </div>
          <div>
            <GoogleAuth />
          </div>
        </article>
      </section>
    </div>
  );
}
