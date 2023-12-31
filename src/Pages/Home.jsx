import Aside from "../Components/Aside/Aside";
import FilterQuestions from "../Components/FilterCuestion/FilterQuestions";
import CreateP from "../Components/HeaderCreatePre/CreateP";
import HeaderGlob from "../Components/Headers/HeaderGlob";

export default function Home() {
  return (
    <div>
      <HeaderGlob />
      <section className="flex ">
        <div className="md:flex-[24%] "><Aside/></div>
        <div className="flex-[76%]">
          <CreateP/>
          <FilterQuestions/>
        </div>
      </section>
    </div>
  );
}
