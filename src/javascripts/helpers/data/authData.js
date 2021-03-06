import firebase from 'firebase/app';
import 'firebase/auth';

import souvenirs from '../../components/souvenirs/souvenirs';
import food from '../../components/foods/food';
import shows from '../../components/shows/shows';
import staff from '../../components/staff/staff';
import animals from '../../components/animals/animals';
import eventsContainer from '../../components/eventsContainer/eventsContainer';
import singleView from '../../components/eventSingleView/eventSingleView';

const loginButton = $('#loginButton');
const logoutButton = $('#logoutButton');
const eventsButton = $('#eventsLink');
const eventsDiv = $('#events');
const singleViewDiv = $('#single-view-event');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      eventsButton.removeClass('hide');
      eventsDiv.removeClass('hide');
      singleViewDiv.removeClass('hide');
      // show buttons
      $('#add-new-show-btn').removeClass('hide');
      $('.show-delete-btn').removeClass('hide');
      $('.show-edit-btn').removeClass('hide');
      // souvenir buttons
      $('#souvenirs-add-btn').removeClass('hide');
      $('.souvenirs-delete-btn').removeClass('hide');
      $('.souvenirs-edit-btn').removeClass('hide');
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      eventsButton.addClass('hide');
      eventsDiv.addClass('hide');
      singleViewDiv.addClass('hide');
      // show buttons
      $('#add-new-show-btn').addClass('hide');
      $('.show-delete-btn').addClass('hide');
      $('.show-edit-btn').addClass('hide');
      // souvenir buttons
      $('#souvenirs-add-btn').addClass('hide');
      $('.souvenirs-delete-btn').addClass('hide');
      $('.souvenirs-edit-btn').addClass('hide');
    }
    food.foodEvents();
    food.buildAllFoods();
    animals.animalEvents();
    animals.buildAllAnimals();
    eventsContainer.buildAllEvents();
    eventsContainer.eventActions();
    staff.staffEvents();
    staff.buildAllStaff();
    shows.buildAllShows();
    shows.showEvents();
    souvenirs.souvenirsEvents();
    souvenirs.buildAllSouvenirs();
    singleView.eventSingleViewClickEvents();
    singleView.filterEvents();
  });
};

export default { checkLoginStatus };
