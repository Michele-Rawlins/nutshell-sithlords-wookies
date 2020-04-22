import utils from '../../helpers/utils';
import foodData from '../../helpers/data/foodData';

const editFoodForm = (e) => {
  const foodId = e.target.closest('.card').id;
  $('#foodModal').modal('show');
  foodData.getFoodInfo(foodId)
    .then((resp) => {
      const foodPlaceholder = resp.data;
      let domString = '';
      domString += `<form class="editFoodForm" data-id="${foodId}" id="editFoodForm">`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-foodType">Type of Food</label>';
      domString += `<input type="text" class="form-control" id="edit-foodType" placeholder="${foodPlaceholder.type}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-foodDescription">Description of Food</label>';
      domString += `<input type="text" class="form-control" id="edit-foodDescription" placeholder='${foodPlaceholder.description}'>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-foodImageUrl">Image Url of Food</label>';
      domString += '<input type="text" class="form-control" id="edit-foodImageUrl" placeholder="Update Image Url">';
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-foodPrice">Price of Food</label>';
      domString += `<input type="number" class="form-control" id="edit-foodPrice" placeholder="$${foodPlaceholder.price}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-foodLocation">Locations Of Food:</label>';
      domString += '<select id="edit-foodLocation" class="form-control" placeholder="">';
      domString += `<option value="">${foodPlaceholder.location}</option>`;
      domString += '<option value="Edinson Tudor Festival">Edinson Tudor Festival</option>';
      domString += '<option value="North Illinois Pleasure Faire">North Illinois Pleasure Faire</option>';
      domString += '<option value="Hopscote-by-Sea Faire">Edinson Tudor Festival</option>';
      domString += '</select>';
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-availabilityOfFood">Availability Of Food:</label>';
      domString += '<select id="edit-availabilityOfFood" class="form-control" placeholder="">';
      domString += '<option value="">Update Availability</option>';
      domString += '<option value="true">Available</option>';
      domString += '<option value="false">Not Available</option>';
      domString += '</select>';
      domString += '</div>';
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('modalFoodForm', domString);
      $('#editFoodSubmit').removeClass('hide');
      $('#newFoodSubmit').addClass('hide');
    })
    .catch((err) => console.error('editFoodForm', err));
};

export default { editFoodForm };
