import PageComponent from "../component/PageComponent";
import SurveyListItems from "../component/SurveyListItems";
import { useStateContext } from "../context/ContextProvider";


export default function Surveys() {

  const { surveys } = useStateContext();
  console.log(surveys);

  return (
    <>
      <PageComponent title={"Sondages"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
          {surveys.map((survey) => (
            <SurveyListItems survey={survey} key={survey.id} />
          ))}
        </div>
      </PageComponent>
    </>
  );
}
