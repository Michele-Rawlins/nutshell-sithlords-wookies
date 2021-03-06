import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventAnimalByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventAnimal.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const eventAnimals = response.data;
      const animals = [];
      Object.keys(eventAnimals).forEach((eventAnimalsId) => {
        eventAnimals[eventAnimalsId].id = eventAnimalsId;
        animals.push(eventAnimals[eventAnimalsId]);
      });
      resolve(animals);
    })
    .catch((error) => reject(error));
});

const getSingleEventAnimal = (eventAnimalsId) => axios.get(`${baseUrl}/eventAnimal/${eventAnimalsId}.json`);

const deleteEventAnimal = (eventAnimalId) => axios.delete(`${baseUrl}/eventAnimal/${eventAnimalId}.json`);

const addEventAnimal = (newEventAnimal) => axios.post(`${baseUrl}/eventAnimal.json`, newEventAnimal);

export default {
  getEventAnimalByEventId,
  getSingleEventAnimal,
  deleteEventAnimal,
  addEventAnimal,
};
