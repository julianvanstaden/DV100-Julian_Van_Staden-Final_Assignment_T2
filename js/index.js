let subOrder = [];

let subName = document.getElementById("subName").value;
let bread = document.getElementById("bread").value;

if(bread === "Italian"){
    subTotal = subTotal + 20;
} else if(bread === "Whole Wheat"){
    subTotal = subTotal + 40;
} else if(bread === "Multigrain"){
    subTotal = subTotal + 60;
}

let toppingOptions = document.getElementsByName("toppings");
let topArray = [];
for(let i = 0; i < toppingOptions.length; i++){
    if(toppingOptions[i].checked){
        topArray.push(toppingOptions[i].value);
        subTotal = subTotal + +toppingOptions[i].dataset.cost
    }
}

subOrder.push({
    subName: subName,
    bread: bread,
    subToppings: topArray,
    subPrice: subTotal
});

console.log(subOrder)

document.getElementById("realTimeCost").innerHTML = "R0.00"
document.getElementById("subForm").reset();



realTimeCost = () => {

realTimePrice = 0; 

let bread = document.getElementById("bread").value;
if(bread === "Italian"){
    realTimePrice = realTimePrice + 20;
} else if(bread === "Whole Wheat"){
    realTimePrice = realTimePrice + 40;
} else if(bread === "Multigrain"){
    realTimePrice = realTimePrice + 60;
}



let toppingOptions = document.getElementsByName("toppings");
for(let i = 0; i < toppingOptions.length; i++){
    if(toppingOptions[i].checked){
        realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
    }
}

document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"

}

displayOrder = () => {

let area = document.getElementById("orders");
let total = document.getElementById("orderTotal");

area.innerHTML = "";

let overallTotal = 0; 

for(let i = 0; i < subOrder.length; i++){

    let name = subOrder[i].subName;
    let bread = subOrder[i].bread;
    let toppings = subOrder[i].toppingOptions;
    let price = subOrder[i].subPrice; 

    overallTotal += price;

    area.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text"><strong>bread:</strong> ${bread}</p>
                    <p class="card-text"><strong>Toppings:</strong> ${toppings}</p>
                    <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
                </div>
            </div>`

    total.innerHTML = "R" + overallTotal + ".00"

}
}