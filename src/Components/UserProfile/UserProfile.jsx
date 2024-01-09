import { useState, useEffect } from "react";

export default function UserProfile() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/api/auth/1")
      .then((res) => res.json())
      .then((res) => setData(res.user))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex justify-center ">
      <section className="w-[90%] mt-4 bg-white rounded-3xl h-[200px]">
        {data && (
          <div>
            <section className="flex gap-10">
              <div className="w-[30%] flex flex-col  justify-center mt-9 items-end">
                <div className="flex flex-col  justify-center items-center">
                  <img
                    className=" rounded-[60px] size-28"
                    src={data.imagen}
                    alt="foto"
                  />
                  <p className=" font-bold">{data.NombreUsuario}</p>{" "}
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="mt-8  font-semibold underline">
                  Descripcion
                </span>
                {data.Description}
              </div>
            </section>
          </div>
        )}
      </section>
    </div>
  );
}
