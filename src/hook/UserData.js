import Cookies from "js-cookie";
import { useEffect, useState } from "react";
export const User = () => {
  const [userData, setUserData] = useState({
    id: "",
    Nombre: "",
    Apellido: "",
    Imagen: "",
  });

  useEffect(() => {
    const userJSON = Cookies.get("user");
    console.log(userJSON)

    if (userJSON) {
      const user = JSON.parse(userJSON);
      setUserData({
        Nombre: user.NombreUsuario,
        Description: user.Description,
        Imagen: user.imagen,
      });
    }
  }, []);
  return { userData };
};