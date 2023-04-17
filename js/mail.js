//Append Child Form
const addButton = document.querySelector('.add-input-field');
const form = document.querySelector('form');

addButton.addEventListener('click', () => {
    const newFieldset = document.createElement('fieldset');
    newFieldset.classList.add('mb-3');
    newFieldset.innerHTML = `
    <div class="child-form">
        <div class="child-header">
            <div class="child-heading">Product Information</div>
            <a class="child-delete" onclick="deleteChild()">x</a>
        </div>
        <div class="row">
        <div class="col-md-12 mb-3">
            <label for="product-name" class="form-label">Product Name</label>
            <input type="text" class="form-control" id="product-name">
        </div>
        <div class="col-md-12 mb-3">
            <label for="description" class="form-label">Description</label>
            <input type="text" class="form-control" id="description">
        </div>
        <div class="col-md-12 mb-3">
            <label for="quantity" class="form-label">Quantity</label>
            <input type="text" class="form-control" id="quantity">
        </div>
        <div class="col-md-12 mb-3">
            <label for="rate" class="form-label">Rate</label>
            <input type="text" class="form-control" id="rate">
        </div>
        <div class="col-md-12 mb-3">
            <label for="amount" class="form-label">Amount</label>
            <input type="text" class="form-control" id="amount">
        </div>
        </div>
    </div>
  `;

    form.insertBefore(newFieldset, form.lastElementChild);
});

//delete Child form
function deleteChild() {
    const element = document.querySelector(".child-form");
    element.remove();
}

const myForm = document.getElementById('buyers_data_input');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(data);
});
