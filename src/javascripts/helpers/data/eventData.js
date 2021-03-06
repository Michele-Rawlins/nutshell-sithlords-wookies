import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getEvents = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/events.json`)
    .then((response) => {
      const allEvents = response.data;
      const events = [];
      if (events) {
        Object.keys(allEvents).forEach((eventId) => {
          allEvents[eventId].id = eventId;
          events.push(allEvents[eventId]);
        });
      }
      resolve(events);
    })
    .catch((error) => reject(error));
});

const getEventById = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/events/${eventId}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});

const getSingleEvent = (eventId) => axios.get(`${baseURL}/events/${eventId}.json`);

const deleteEvent = (eventId) => axios.delete(`${baseURL}/events/${eventId}.json`);

const updateEvent = (eventId, editedEvent) => axios.put(`${baseURL}/events/${eventId}.json`, editedEvent);

const addEventData = (newEventData) => axios.post(`${baseURL}/events.json`, newEventData);

export default {
  getEventById,
  getEvents,
  getSingleEvent,
  deleteEvent,
  updateEvent,
  addEventData,
};
