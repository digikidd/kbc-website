import axios from "axios";

//export const savePortfolio = (project) => {
//   const request = axios.post("http://localhost:3131/portfolio", project);
//   console.log("lights, camera, action!");
//   return {
//      type: "CREATE_PORTFOLIO",
//      payload: request
//   }
//};

export const getProjects = () => {
   const request = axios.get("http://localhost:3131/portfolio/all");
   return {
      type: "GETTING_PROJECTS",
      payload: request
   }
};