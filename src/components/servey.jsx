import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./json";
import { SurveyPDF } from 'survey-pdf';

const pdfDocOptions = {
  fontSize: 12
};

const savePdf = function (surveyData) {
  const surveyPdf = new SurveyPDF(json, pdfDocOptions);
  surveyPdf.data = surveyData;
  surveyPdf.save();
}; 

function SurveyComponent() {
    
    const survey = new Model(json);
    survey.addNavigationItem({
    id: "pdf-export",
    title: "Save as PDF",
    action: () => savePdf(survey.data)
    });
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });

    return ( <Survey model={survey} id="surveyContainer" />);
}
export default SurveyComponent;