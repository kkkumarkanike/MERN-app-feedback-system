import axios from "axios";

export const createSurvey = (survey) => {
  return async (dispatch) => {
    console.log(survey);
    const newSurvey = await axios.post("/api/surveys", survey);
    console.log(newSurvey);
  };
};
