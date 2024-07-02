import PageComponent from "../component/PageComponent";
import SurveyListItems from "../component/SurveyListItems";
import { useStateContext } from "../context/ContextProvider";


export default function Surveys() {

  const { surveys } = useStateContext();
  console.log(surveys);

  return (
    <>
      <PageComponent title={"Sondages"}>
        <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
          {surveys.map(survey => (
            <SurveyListItems survey={survey} key={survey.id} />
          ))}
        </div>
      </PageComponent>
    </>
  );
}
