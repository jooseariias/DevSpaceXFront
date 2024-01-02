import { User } from "../hook/UserData";

export default function PrivateRoute({ element }) {
  const { userData } = User();
  const rol = userData.Nombre;


  if (rol !== undefined ) {
    return element;
  } 
}