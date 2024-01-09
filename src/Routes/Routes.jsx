import { Route, Routes } from "react-router-dom";
import Seccion from "../Pages/Seccion";
import Home from "../Pages/Home";
import Questions from "../Pages/Questions";
import PrivateRoute from "../hook/PrivateRoute";
import QuestionId from "../Pages/QuestionId";
import Profile from "../Pages/Profile";

export default function Urls() {
  return (
    <Routes>
      <Route exact path="/" element={<Seccion />} />
      <Route exact path="/Home" element={<PrivateRoute element={<Home />} />} />
      <Route exact path="/Profile" element={<PrivateRoute element={<Profile/>} />} />
      <Route exact path="/Questions" element={<PrivateRoute element={<Questions />} />} />
      <Route exact path="/Questions/:id" element={<PrivateRoute element={<QuestionId/>} />} />
    </Routes>
  );
}
