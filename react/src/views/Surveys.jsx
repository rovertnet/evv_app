import PageComponent from "../component/PageComponent";
import SurveysList from "../component/SurveysList";
import { useStateContext } from "../context/ContextProvider";


export default function Surveys() {

  const { surveys } = useStateContext();
  console.log(surveys);

  return (
    <>
      <PageComponent title={"Sondages"}>
        {surveys.map(survey =>(
          <SurveysList survey={survey} key={survey.id} />
        ))}
      </PageComponent>
    </>
  );
}
