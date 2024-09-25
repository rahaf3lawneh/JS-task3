var productform = document.querySelector(".productform");
var nameInput = document.querySelector("#name");
var discriptionInput = document.querySelector("#discription");
var priceInput = document.querySelector("#price");

 var products = [];

productform.onsubmit = function(e)
{
    e.preventDefault();
    
    var product = 
    {
        name:nameInput.value,
        discription:discriptionInput.value,
        price:priceInput.value,
    };

    products.push(product);
    
    data ();

}

function data ()
{
    var data = ``;
    for(var i = 0; i<products.length;i++)
    {
        data+=`
        <tr>
            <td> ${products[i].name}</td>
            <td> ${products[i].discription}</td>
            <td> ${products[i].price}</td>
        </tr>`;
    }

    document.querySelector("tbody").innerHTML=data;
}
