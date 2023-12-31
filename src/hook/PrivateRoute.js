import { User } from "../hook/UserData";

export default function PrivateRoute({ element }) {
  const { userData } = User();
  const rol = userData.Nombre;
  console.log(rol,"rol")

  if (rol !== undefined ) {
    return element;
  } 
}