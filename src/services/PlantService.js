import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const PLANT_SERVICE = {
  newPlant(newPlantData) {
    return service.post("/app/create-plant", newPlantData);
  },

  uploadPlantImage(plantImage) {
    return service.post("/app/plant-image-upload", plantImage);
  },

  updateGoal(goalId, updatedGoalData) {
    return service.post(`/app/${goalId}/update`, updatedGoalData);
  },

  deleteGoal(goalId) {
    return service.post(`/app/${goalId}/delete`);
  },
};

export default PLANT_SERVICE;
