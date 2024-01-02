import { Route, Routes } from "react-router-dom";
import Seccion from "../Pages/Seccion";
import Home from "../Pages/Home";
import Questions from "../Pages/Questions";
import PrivateRoute from "../hook/PrivateRoute";
export default function Urls() {
  return (
    <Routes>
      <Route exact path="/" element={<Seccion />} />
      <Route exact path="/Home" element={<PrivateRoute element={<Home />} />} />
      <Route exact path="/Questions" element={<PrivateRoute element={<Questions />} />} />
    </Routes>
  );
}
