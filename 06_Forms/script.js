// ===========get form by name

const form= document.forms.createForm;
console.dir(form);

//==== get form control by name

const modelInput=form.elements.model;
const priceInput=form.elements.price;
const inStockInput=form.elements.inStock;

console.log("Model input:",modelInput);
console.log("Price input:",priceInput);
console.log("In Stock input:",inStockInput);

//=== get input value=====
console.log("Model:",modelInput.value);
console.log("Price:",priceInput.value);
console.log("In Stock:",inStockInput.checked);

//=== set click event handler on submit button==
let listProducts=[];
class Product{
    static count=0;
    constructor(model, price, inStock){
        this.model=model;
        this.price=price;
        this.inStock=inStock;
        this.id=++Product.count;
    }

}

createForm.onsubmit=function(event){
    event.preventDefault();//disable default logic working form
    let newProduct=new Product(modelInput.value, priceInput.value,inStockInput.checked);
    addProductToTable(newProduct);
}

function addProductToTable(product){
    // let tableBody=document.getElementById("tableProducts");
    console.dir(tableProducts);
    tableProducts.innerHTML+=`<tr id="product${product.id}">
                                <th scope="row">${product.id}</th>
                                <td>${product.model}</td>
                                <td>${product.price}$</td>
                                <td>${product.inStock ? "In Stock" : "Out of Stock"}</td>
                                <td><button class="btn btn-danger" onclick="removeProduct(product${product.id})">Remove</button></td>
                              </tr>`;
}

function removeProduct(productid){
    console.log(productid);
    productid.remove();
}

// function removeProduct(event){
//     console.dir(event.currentTarget.parentElement.parentElement);
//     event.currentTarget.parentElement.parentElement.remove();
//     // event.currentTarget.remove();
// }