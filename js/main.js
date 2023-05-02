let childFormCount = 0;

const productForm = document.getElementById("child-form-container");

document.getElementById("plus_btn").addEventListener('click', () => {
    childFormCount++;
    let childFormHTML = `
    <div class="products-form ${"products-form-" + childFormCount}">
        <div class="child-header">
            <div class="child-heading">Product Information</div>
            <a class="child-delete" onclick="deleteChild(${childFormCount})" id ="delete_btn">x</a>
        </div>
        <div class="row">
        <div class="col-md-12 mb-3">
            <label for="product-name" class="form-label">Product Name</label>
            <input type="text" class="form-control" id=${"product_name" + childFormCount}>
        </div>
        <div class="col-md-12 mb-3">
            <label for="description" class="form-label">Description</label>
            <input type="text" class="form-control" id=${"product_desc" + childFormCount}>
        </div>
        <div class="col-md-12 mb-3">
            <label for="quantity" class="form-label">Quantity</label>
            <input type="text" class="form-control" id=${"product_quantity" + childFormCount}>
        </div>
        <div class="col-md-12 mb-3">
            <label for="rate" class="form-label">Rate</label>
            <input type="text" class="form-control" id=${"product_rate" + childFormCount}>
        </div>
        <div class="col-md-12 mb-3">
            <label for="amount" class="form-label">Amount</label>
            <input type="text" class="form-control" id=${"product_amount" + childFormCount}>
        </div>
        </div>
    </div>
`
    const innerDiv = document.createElement("div");
    innerDiv.innerHTML = childFormHTML;
    productForm.appendChild(innerDiv);
});



let skipIndex = [];

function deleteChild(c) {
    let className = `products-form-${c}`;
    console.log('deleteChild:', className);
    let productsInfoForm = document.getElementsByClassName(className);

    skipIndex.push(c);

    console.log(skipIndex);

    for (let productFormDiv of productsInfoForm) {
        productForm.removeChild(productFormDiv.parentNode);
    }
};



let products = [];
const submitBtn = document.getElementById('submit_btn');
submitBtn.addEventListener('click', () => {
    let productFormArea = document.getElementsByClassName("products-form");

    products = [];

    console.log(productFormArea.length);
    console.log(productFormArea);

    for (let index = 1; index <= childFormCount; index++) {

        if (skipIndex.includes(index))
            continue;

        let productObj = {
            pName: document.getElementById(`product_name${index}`)?.value,
            pDesc: document.getElementById(`product_desc${index}`)?.value,
            pQuantity: document.getElementById(`product_quantity${index}`)?.value,
            pPrice: document.getElementById(`product_rate${index}`)?.value,
            tPrice: document.getElementById(`product_amount${index}`)?.value,
        };
        products.push(productObj);
        console.log(productObj);
    }
    console.log({ products });

    const showOutput = document.getElementById("output");

    if (products.length) {
        showOutput.innerHTML = JSON.stringify(products);
    }
    else {
        showOutput.innerHTML = "";
    }
});